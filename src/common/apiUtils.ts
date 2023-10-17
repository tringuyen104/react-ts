import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
}

const rootUrl = 'http://ec2-100-26-141-197.compute-1.amazonaws.com/';

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