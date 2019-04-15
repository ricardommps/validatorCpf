import React, { Component } from 'react';


class StatusServer extends Component {
    render() {
        return (
            <div>
                <iframe src='http://localhost:9000/status' width='700' height='900'></iframe>
            </div>
        )
    }
}

export default StatusServer