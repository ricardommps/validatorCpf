export const getClient = state => state.clientsReducer || {};
export const getItensClients = state => getClient(state).clients || [];
export const showClient = state => getClient(state).client || [];
export const clientUpdate = state => getClient(state).clientUpdate || [];
