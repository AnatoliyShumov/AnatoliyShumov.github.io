import React, { useEffect} from 'react'
import { connect } from 'react-redux';
import {  getData  } from './components/redux/actions/dataAction';
import Table from './components/table/table'




function App(props) {
    // props.getData()
    // const [datas, setDatas] = useState([]);
    useEffect(() => {
        props.getData()
    }, []);

    let arrModifactionTime = props.items.map((i)=>{
        function convertTimestamptoTime() {
            let unixTimestamp = i.time;
            // convert to milliseconds
            let dateObj = new Date(unixTimestamp * 1000);
            let utcString = dateObj.toUTCString();
            // console.log(utcString)
            return utcString
            // let time = utcString.slice(-11, -4);
        }
        return {...i, time:convertTimestamptoTime()}
    })

    const columns = React.useMemo(

        () => [
            {
                Header: 'Time',
                accessor: 'time',
                className: 'time',
                collapse: true,
            },
            {
                Header: 'Title',
                accessor: 'title',
                Cell: ({ row }) => (<a href={row.original.comments}>{row.values.title}</a>),
                collapse: true
            },
            {
                Header: 'Domain',
                accessor: 'domain',
                className: 'domain',
                collapse: true,
            },
        ],
        []
    )
    // const data = React.useMemo(() => makeData(100000), []);
    // console.log(props.items)
    return <Table columns={columns} data={arrModifactionTime} />
}
function mapStateToProps(state, props) {
    // console.log(state.data.items)
    return {
        items: state.data.items
    };
}
const mapDispatch = {
    getData
};

export default connect(mapStateToProps, mapDispatch)(App);

