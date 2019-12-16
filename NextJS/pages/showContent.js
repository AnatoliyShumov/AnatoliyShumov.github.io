import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions/actions';
import styled from 'styled-components';
import Search from './search'
import Router from 'next/router'

function ShowContent (props) {
    const {films} = props;
    const filmContent = films.map((e)=>{
            const show = e.show;
            const validationImg = (value) => {
                if (value && value.medium != null) {
                    return value.medium
                }
                else {
                    return ''
                }
            }
            const validationArr = (value) => {
                if (value.length >= 1) {
                    return value.join(', ')
                }
                else return value
            }
            return (
                <FilmWrapper key={show.id} >
                    <div className='filmName'>
                        <h1>{show.name}</h1>
                    </div>
                    <div>
                        <h3>
                            {validationArr(show.genres)}
                        </h3>
                    </div>
                    <div>
                        <img onClick={() => props.actions.withShowFilm(show.id, Router.push({pathname: `/filmDeskription`, query: show.id}))} src={ validationImg(show.image)} alt=""/>
                    </div>
                </FilmWrapper>)
        })
    return (
        <Wrapper>
            <Search/>
            <ContentWrapper>
                {filmContent}
            </ContentWrapper>
        </Wrapper>
    );
}


function mapStateToProps({search}) {

    return {
        films: search.contents
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
`;
const FilmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% /3 - 50px);
  padding: 20px;
  justify-content: center;
  .filmName{
    text-align: center;
  }
`;
export default connect(mapStateToProps, mapDispatchToProps)(ShowContent);