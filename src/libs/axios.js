
import axios from 'axios';
let base = 'http://www.yinkaiyan.cn';
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