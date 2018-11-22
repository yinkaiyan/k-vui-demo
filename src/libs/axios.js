
import axios from 'axios';
let base = 'http://192.168.102.131';
console.log(base);
//post
export const postData = (url, params) => {
    return axios({
        method: 'post',
        url: base+ url,
        params:params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
};