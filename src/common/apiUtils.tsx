import axios from "axios";

export function get(url: string){
    return axios.get(url);
}
export function post(url: string, model: any){
    return axios.post(url, model);
}