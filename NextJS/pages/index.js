import React from 'react';
//import {  Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions/actions';
import { useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'


function Index(props) {
    // let history = useHistory();
    const router = useRouter();
    useEffect(() => {
        router.push({
            pathname: '/search',
        })
    })
  return (
      <div>
          <Head>
              <title>Shumov</title>
          </Head>
      </div>

  );
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapDispatchToProps)(Index);
