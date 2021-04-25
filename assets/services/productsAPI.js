import axios from 'axios';
import { PRODUCTS_API } from '../config';

function findAll() {
    return axios
        .get(PRODUCTS_API)
        .then(response => response.data['hydra:member'])
}

function find(id) {
    return axios
        .get("http://localhost:8000/api/products/" + id)
        .then(response => response.data);
}

function update(id, product) {
    return axios.put("http://localhost:8000/api/products/" + id, product);
}

function create(product) {
    return axios.post("http://localhost:8000/api/products", { ...product, user: `/api/users/${product.user}` })
}

function deleteProduct(id) {
    return axios.delete("http://localhost:8000/api/products/" + id);
}

export default {
    findAll,
    find,
    update,
    create,
    deleteProduct
}