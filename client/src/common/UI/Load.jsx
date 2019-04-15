import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Load extends Component {
	static propTypes = {
		message: PropTypes.string,
		isGlobal: PropTypes.bool,
		isLoading: PropTypes.bool
	};

	render() {
		const { isGlobal, isLoading, message } = this.props;
		let cssClass = ['sds-load'];

		if (isGlobal) {
			cssClass.push('sds-load--global');
		}

		if (!isLoading) {
			cssClass.push('sds-load--is-ready');
		}

		cssClass = cssClass.join(' ');

		return (
			<div className={cssClass}>
				<div className="sds-load__content">
					<svg
						width="3rem"
						height="3rem"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 100 100"
						preserveAspectRatio="xMidYMid"
						className="lds-rolling">
						<circle
							cx="50"
							cy="50"
							fill="none"
							stroke="#666666"
							strokeWidth="4"
							r="40"
							strokeDasharray="164.93361431346415 56.97787143782138"
						/>
					</svg>
					{message && <p className="sds-p">{message}</p>}
				</div>
			</div>
		);
	}
}
