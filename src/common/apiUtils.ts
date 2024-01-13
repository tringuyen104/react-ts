import axios from "axios";

const headers = {
    'Content-Type': 'application/json;charset=utf-8;',
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
}

const rootUrl = 'https://localhost:7275/';
// const rootUrl = 'http://localhost:5051/';

export function get(url: string) {
    return axios.get(`${rootUrl}${url}`, { headers: headers });
}

export function post(url: string, model: any) {
    return axios.post(`${rootUrl}${url}`, model, { headers: headers });
}

export function callApi(url: string, method: string, data?: any) {
    var config = {
        method: method,
        url: `${rootUrl}${url}`,
        headers: headers,
        data: data
    };

    return axios(config);
}