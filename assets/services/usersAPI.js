import axios from 'axios';
import { USERS_API } from '../config';

function findAll() {
    return axios
        .get(USERS_API)
        .then(response => response.data['hydra:member'])
}

function find(id) {
    return axios
        .get("http://localhost:8000/api/users/" + id)
        .then(response => response.data);
}

function register(user) {
    return axios.post(USERS_API, user);
}

export default {
    findAll,
    find,
    register
}