import React, { Component } from 'react';

class AnalyticDetails extends Component {
    constructor(props) {
        super(props)
        this.analyticsId = this.props.match.params.id
    }

    render() {
        return (
            <div>
                <h1>Analytic Details Page</h1>
                <p>Gesamtzahl SLTs im Kreislauf: </p>
                
            </div>
        );
    }
}

export default AnalyticDetails;