import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import clientsReducer from './clients/reducer'
import ui from './ui/reducer';

export default combineReducers({
    clientsReducer,
    ui,
    form: reduxFormReducer, // mounted under "form"
});