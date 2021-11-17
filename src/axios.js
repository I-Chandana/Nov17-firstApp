import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://itexphere.herokuapp.com'
    // http://localhost:9000
});

export default instance;