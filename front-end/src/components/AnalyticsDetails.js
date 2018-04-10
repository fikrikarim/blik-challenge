import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    analyticsDelivery, 
    analyticsDistribution, 
    analyticsThroughput, 
    deliveryOptionChanged, 
    distributionOptionChanged 
} from '../actions';
import AnalyticsDelivery from './AnalyticsDelivery';
import AnalyticsDistribution from './AnalyticsDistribution';
import AnalyticsThroughput from './AnalyticsThroughput';

class AnalyticsDetails extends Component {
    constructor(props) {
        super(props)
        this.analyticsId = this.props.match.params.id
    }

    componentDidMount() {
        this.props.analyticsDelivery(this.analyticsId, this.props.deliveryOption)
        this.props.analyticsDistribution(this.analyticsId)
        this.props.analyticsThroughput(this.analyticsId)
    }

    handleDeliveryOption(e) {
        this.props.deliveryOptionChanged(e.target.value)
        this.props.analyticsDelivery(this.analyticsId, e.target.value)
    }

    handleDistributionOption(e) {
        this.props.distributionOptionChanged(e.target.value)
    }

    render() {
        const { deliveries, distributions, throughputs, distributionOption } = this.props
        
        return (
            <div>
                <h1>Analytic Details Page</h1>
                <p>Gesamtzahl SLTs im Kreislauf: </p>
                <p>Number of deliveries per: </p>
                <select onChange={this.handleDeliveryOption.bind(this)} value={this.props.deliveryOption}>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                </select>
                <AnalyticsDelivery data={deliveries} />
                <p>Distribution of SLTs in the circulation: </p>
                <form onChange={this.handleDistributionOption.bind(this)}>
                    <input type="radio" name="distributionOption" value="alle" defaultChecked={distributionOption === "alle" ? "checked" : ""}/> Alle
                    <input type="radio" name="distributionOption" value="leergut" defaultChecked={distributionOption === "leergut" ? "checked" : ""}/> Leergut
                    <input type="radio" name="distributionOption" value="vollgut" defaultChecked={distributionOption === "vollgut" ? "checked" : ""}/> Vollgut
                </form>
                <AnalyticsDistribution data={distributions} distributionOption={distributionOption} />
                <p>Process runtime: </p>
                <AnalyticsThroughput data={throughputs} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    deliveries: state.analytics.deliveries,
    distributions: state.analytics.distributions,
    throughputs: state.analytics.throughputs,
    deliveryOption: state.analytics.deliveryOption,
    distributionOption: state.analytics.distributionOption,
});

export default
    connect(
        mapStateToProps,
        {
            analyticsDelivery,
            analyticsDistribution,
            analyticsThroughput,
            deliveryOptionChanged,
            distributionOptionChanged
        }
    )(AnalyticsDetails);