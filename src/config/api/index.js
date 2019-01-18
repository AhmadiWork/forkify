import axios from 'axios';

export const recipesApi = axios.create({
    baseURL: 'https://www.food2fork.com/api',
    params: {
        key: 'ee40dd03e34b7ec4931b40de5b8f099d'
    }
});