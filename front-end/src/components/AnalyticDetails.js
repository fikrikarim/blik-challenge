import React, { Component } from 'react';

class AnalyticDetails extends Component {
    render() {
        return (
            <div>
                <h1>Analytic Details Page</h1>
                <p>The analytic ID is: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default AnalyticDetails;