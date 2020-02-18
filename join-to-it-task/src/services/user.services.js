import axios from 'axios';

export const userService = {
    getUserData,
};

function  getUserData (user) {

    const requestOptions ={
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/users${user}`,
        header:'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept'

    };
    return axios( requestOptions)
        .then(user => {
            return user.data;
        });
}