import axios from 'axios'

const API_URL='https://localhost:7067'
const token=  localStorage.getItem('token')
export default{
    // get(endpoint){
    //     return axios.get(`${API_URL}/${endpoint}`);
    // },
    // post(endpoint,data){
    //     return axios.post(`${API_URL}/${endpoint}`,data);
    // },
    // put(endpoint,data){
    //     return axios.put(`${API_URL}/${endpoint}`,data);
    // },
    // put(endpoint){
    //     return axios.put(`${API_URL}/${endpoint}`);
    // },
    // delete(endpoint){
    //     return axios.delete(`${API_URL}/${endpoint}`);
    // },
    post(endpoint,data,content_type){
        const headers = {
             Authorization: `Bearer ${token}`,
            'Content-Type': content_type
          };
        return axios.post(`${API_URL}/${endpoint}`,data,{headers});
    },
    get(endpoint){
        const headers = {
            Authorization: `Bearer ${token}`,
           
         };
        return axios.get(`${API_URL}/${endpoint}`,{headers});
    },
    put(endpoint,data){
        const headers = {
            Authorization: `Bearer ${token}`,
         };
        return axios.put(`${API_URL}/${endpoint}`,data,{headers});
    },
    put(endpoint){
        const headers = {
            Authorization: `Bearer ${token}`,
         };
        return axios.put(`${API_URL}/${endpoint}`,{headers});
    },
    delete(endpoint){
        const headers = {
            Authorization: `Bearer ${token}`,
         };
        return axios.delete(`${API_URL}/${endpoint}`,{headers});
    },
};

