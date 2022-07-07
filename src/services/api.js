import axios from "axios";

export const api = axios.create({
    baseURL: 'https://knn-db.herokuapp.com/'
})