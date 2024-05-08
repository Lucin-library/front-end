import axios from 'axios';

const appApi = axios.create({
    baseURL: 'http://localhost:3000/v1/api',
});

export const get = async (path, options = {}) => {
    console.log('path');
    const response = await appApi.get(path, options);
    return response.data;
};

export default appApi;
