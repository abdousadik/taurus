import axios from 'axios';
import { USERS_API } from '../config';

function findAll() {
    return axios
        .get(USERS_API)
        .then(response => response.data['hydra:member'])
}

function register(user) {
    return axios.post(USERS_API, user);
}

export default {
    findAll,
    register
}