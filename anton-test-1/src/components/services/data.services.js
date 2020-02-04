import axios from 'axios';

export const userService = {
    getData
};

function getData(user) {

    const requestOptions = {
        method: 'GET',
        url: 'https://api.hnpwa.com/v0/news/1.json',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(user)
    };

    return axios(requestOptions).then(user =>{
        // localStorage.setItem('user', JSON.stringify(user));
        return user;
    });
}