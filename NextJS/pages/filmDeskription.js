import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions/actions';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser'
import Head from "next/dist/next-server/lib/head";

function FilmDescription (props) {
    const {showFilm} = props;
    console.log(showFilm)
    return (
        <Wrapper>
            <Head>
                <title>Film Description</title>
            </Head>
            <ContentWrapper>
                <FilmWrapper key={showFilm.id} >
                    <div className='filmName'>
                        <h1>{showFilm.name}</h1>
                    </div>
                    <div>
                        <h3>
                            {showFilm.genres.join(', ')}
                        </h3>
                    </div>
                    <div>
                        <img src={showFilm.image.medium} alt=""/>
                    </div>
                </FilmWrapper>
                <FilmAbout>
                    {ReactHtmlParser(showFilm.summary)}
                </FilmAbout>
            </ContentWrapper>
        </Wrapper>
    );
}


function mapStateToProps({showFilm}) {
    return {
        showFilm
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
const Wrapper = styled.div`
  display: flex;
 flex-direction: column;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  margin: 0 40px;
`;
const FilmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

const FilmAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-top: 130px;
`;
export default connect(mapStateToProps, mapDispatchToProps)(FilmDescription);