import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getLoading } from '../redux/ui/selectors';

import { Load } from './UI';

class GlobalLoad extends Component {
	render() {
		const { isLoading, message } = this.props;
		return <Load isGlobal={true} isLoading={isLoading} message={message} />;
	}
}

const mapStateToProps = state => ({
	isLoading: getLoading(state)
});

export default connect(mapStateToProps)(GlobalLoad);
