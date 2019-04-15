import Home from  '../Home/HomePage';
import Client from  '../Client/ClientPage';
import StatusServer from  '../StatusServer/StatusServer';
import ReduxFormPage from  '../ReduxForm/ReduxFormPage';

const routes = [
	{
		path: '/status',
		component: StatusServer
	},
	{
		path: '/redeux-form',
		component: ReduxFormPage
	},
	{
		path: '/home',
		component: Home,
		state: {}
	},
	{
		path: '/newClient',
		component: Client,
		state: {}
	},
	{
		path: '/updateClient/:idClient',
		component: Client,
		state: {}
	},
	{
		path: '/',
		component: Home,
		state: {}
	}
];

export default routes;