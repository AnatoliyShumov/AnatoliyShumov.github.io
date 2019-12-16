import React from 'react'
import { withRouter } from 'next/router'
import Head from "next/dist/next-server/lib/head";

class About extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }
/// TODO: getInitialProps ????
    static async getInitialProps(props) {
        console.log('props', props);
        return {};
    }

    render() {
        return <div>
            <Head>
                <title>Shumov</title>
            </Head>
            Hello World</div>
    }
}

export default withRouter(About);