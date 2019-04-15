import axios from 'axios';

import { ToastManager } from './common/UI';
import { startRequest, stopRequest } from './redux/ui/actions';
import EnvConstant from './constants/env.constants';

export default dispatch => {
	axios.defaults.baseURL = EnvConstant.BASE_URL;
	axios.defaults.headers.post['Content-Type'] = 'application/json';
	axios.defaults.headers['Cache-control'] = 'no-cache';
	axios.defaults.headers['Pragma'] = 'no-cache';
	axios.defaults.headers['Expires'] = 0;

	if (!dispatch) return;

	let errorCallBack = error => {
		console.log("INTERCEPTOR>>>",error.response)
		dispatch(stopRequest());
		let message = 'Falha de conexão com servidor.'
		
		
		if (error && error.response && error.response.data && error.response.data.error) {
			message = error.response.data.error
		}
		ToastManager.showErrorMessage(message);
		return Promise.reject(error);
	};

	axios.interceptors.request.use(config => {
		dispatch(startRequest());
		return config;
	}, errorCallBack);

	axios.interceptors.response.use(response => {
		dispatch(stopRequest());
		return response;
	}, errorCallBack);
};

