import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions/actions';
import Router from 'next/router'
import Head from "next/dist/next-server/lib/head";

function SearchBar (props) {
    const {value} = props;
    const handleSubmit = e => {
        e.preventDefault();
        props.actions.withSearch(value);
        props.actions.clearInputValue();
    };
    return (
        <div>
            <Head>
                <title>Search</title>
            </Head>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    placeholder = "Procurar Trabalho"
                    onChange={(e) => props.actions.search(e.target.value)}
                    value={value}
                />
                <button onClick={() => Router.push({
                    pathname: '/showContent',
                })}>Send data!</button>
            </form>

        </div>

    );
}


function mapStateToProps({search}) {

    return {value: search.value,
    search};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);