import axios from 'axios';

import * as constants from './constants';

//const BASE_URL = constants.REACT_APP_API_BACKEND;
const BASE_URL = `${constants.REACT_APP_API_BACKEND}`;
class ClientService {
    clients() {
        return axios
            .get(BASE_URL)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    clientInfo(idCliente) {
        return axios
            .get(`${BASE_URL}/show/${idCliente}`)
            .then(resp => resp.data)
            .catch(err => {
                throw err;
            });
    }

    createClient(params) {
        return axios
            .post(`${BASE_URL}/save`, params)
            .then(resp => resp.data)
            .catch(err => {
                throw err;
            });
    }

    updateClient(params, idCliente) {
        return axios
            .post(`${BASE_URL}/update/${idCliente}`, params)
            .then(resp => resp.data)
            .catch(err => {
                throw err;
            });
    }

    deletClient(idCliente) {
        return axios
            .post(`${BASE_URL}/delete/${idCliente}`)
            .then(resp => resp.data)
            .catch(err => {
                throw err;
            });
    }
}

export default new ClientService();