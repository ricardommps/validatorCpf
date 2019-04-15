import types from '../../constants/actionTypes.constants';

const INITIAL_STATE = {
	client: {},
    clients: [],
    clientUpdate: {},
    idNewClient:""
};

export default (state = INITIAL_STATE, action) => {
    console.log(">>>>>>action.type ",action.type)
    switch (action.type) {
        case types.LOAD_CLIENTS:
        return {
            ...state,
            clients: action.payload,
        };
        case types.CREATE_CLIENT:
        return {
            ...state,
            idNewClient: action.payload,
        };
        case types.LOAD_CLIENT_BY_ID:
        return {
            ...state,
            client: action.payload,
        };
        case types.UPDATE_CLIENT:
            return{
                ...state,
                clientUpdate: action.payload,
            }
       
        default:
            return state
    }
}