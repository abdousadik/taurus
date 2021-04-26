import axios from 'axios';
import { PRODUCTS_API } from '../config';

function findAll() {
    return axios
        .get(PRODUCTS_API)
        .then(response => response.data['hydra:member'])
}

function find(id) {
    return axios
        .get(PRODUCTS_API + "/" + id)
        .then(response => response.data);
}

function update(id, product) {
    return axios.put(PRODUCTS_API + "/" + id, product);
}

function create(product) {
    return axios.post(PRODUCTS_API, { ...product, user: `/api/users/${product.user}` })
}

function deleteProduct(id) {
    return axios.delete(PRODUCTS_API + "/" + id);
}

export default {
    findAll,
    find,
    update,
    create,
    deleteProduct
}