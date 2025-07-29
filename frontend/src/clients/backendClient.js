import axios from 'axios';


export const backendClient = axios.create({
    baseURL: `/api`,
});