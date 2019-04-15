import clientService from '../../api/clients'
import types from '../../constants/actionTypes.constants';

export const getClients = (
    service = clientService
) => dispatch =>
        service
            .clients()
            .then(data =>
                dispatch({
                    type: types.LOAD_CLIENTS,
                    payload: data
                })
            );

export const getClientById = (
    idClient,
    service = clientService
) => dispatch =>
        service
            .clientInfo(idClient)
            .then(data =>
                dispatch({
                    type: types.LOAD_CLIENT_BY_ID,
                    payload: data
                })
            );

export const createClient = (
    params,
    service = clientService
) => dispatch => {
    return service.createClient(params)
        .then(data =>
            dispatch({
                type: types.CREATE_CLIENT,
                payload: data
            })
	    )
};

export const updateClient = (
    params,
    idClient,
    service = clientService
) => dispatch => {
    return service.updateClient(params, idClient )
        .then(data =>
            dispatch({
                type: types.UPDATE_CLIENT,
                payload: data
            })
	    );
};

export const deleteClient = (
    idClient,
    service = clientService
) => dispatch => {
    return service.updateClient(idClient )
        .then((data) =>
            dispatch({
                type: types.UPDATE_CLIENT,
                payload: data
            })
	    );
};

export function clean() { return { type: types.CLEAN} };


