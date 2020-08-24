import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d4c15.firebaseio.com/',
});

export default instance;
