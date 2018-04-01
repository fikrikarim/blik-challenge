import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyticsList } from '../actions';
import { Link } from 'react-router-dom';

class Analytics extends Component {
    componentDidMount(){
        this.props.analyticsList()
    }

    render() {
        let listIDS = this.props.ids.map(id =>
                <tr key={id}>
                    <th>
                        <Link to={`analytics/${id}`}>
                            {id}
                        </Link>
                    </th>
                </tr>
            )
        return (
            <div>
                <h1>Analytics</h1>
                <table >
                    <tbody>
                        <tr>
                            <th>Available analytics</th>
                        </tr>
                        {listIDS}
                    </tbody>
                </table>
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