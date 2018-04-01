import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyticsList } from '../actions'

class Analytics extends Component {
    componentDidMount(){
        this.props.analyticsList()
    }

    render() {
        return (
            <div>
                <h1>Analytics</h1>
                <p>Analytics Page!</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ids: state.analytics.ids,
});

export default connect(
    mapStateToProps, 
    {
        analyticsList
})(Analytics);