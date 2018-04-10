import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { 
    analyticsDelivery, 
    analyticsDistribution, 
    analyticsThroughput,
    analyticsZone,
    deliveryOptionChanged, 
    distributionOptionChanged,
    zoneOptionChanged
} from '../actions';
import AnalyticsDelivery from './AnalyticsDelivery';
import AnalyticsDistribution from './AnalyticsDistribution';
import AnalyticsThroughput from './AnalyticsThroughput';
import AnalyticsZone from './AnalyticsZone';

class AnalyticsDetails extends Component {
    constructor(props) {
        super(props)
        this.analyticsId = this.props.match.params.id
    }

    componentDidMount() {
        this.props.analyticsDelivery(this.analyticsId, this.props.deliveryOption)
        this.props.analyticsDistribution(this.analyticsId)
        this.props.analyticsThroughput(this.analyticsId)
        this.props.analyticsZone(this.analyticsId)
    }

    renderZoneOption(){
        const zones = this.props.zones

        if (zones) {
            return zones.map(zone => (
                <option value={zone.name} key={zone.name}>{zone.name}</option>
            ))
        }
    }

    handleDeliveryOption(e) {
        this.props.deliveryOptionChanged(e.target.value)
        this.props.analyticsDelivery(this.analyticsId, e.target.value)
    }

    handleDistributionOption(e) {
        this.props.distributionOptionChanged(e.target.value)
    }

    handleZoneOption(e) {
        this.props.zoneOptionChanged(e.target.value)
    }

    render() {
        const { deliveries, distributions, throughputs, distributionOption, zones, zoneOption, zoneLocation, numbers } = this.props
        
        return (
            <div>
                <div style={{ display: 'flex', alignContent: 'stretch', alignItems: 'center' }}>
                    <div style={{ flexGrow: 1 }}>
                        <p>Gesamtzahl SLTs im Kreislauf: {numbers}</p>
                        <p>Number of deliveries per: </p>
                        <select onChange={this.handleDeliveryOption.bind(this)} value={this.props.deliveryOption}>
                            <option value="week">Week</option>
                            <option value="month">Month</option>
                        </select>
                        <AnalyticsDelivery data={deliveries} />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        <p>Process runtime: </p>
                        <AnalyticsThroughput data={throughputs} />
                    </div>
                </div>
                <div style={{ display: 'flex', alignContent: 'stretch', alignItems: 'center' }}>
                    <div style={{ flexGrow: 1 }}>
                        <p>Distribution of SLTs in the circulation: </p>
                        <form onChange={this.handleDistributionOption.bind(this)}>
                            <input type="radio" name="distributionOption" value="alle" defaultChecked={distributionOption === "alle" ? "checked" : ""} /> Alle
                                <input type="radio" name="distributionOption" value="leergut" defaultChecked={distributionOption === "leergut" ? "checked" : ""} /> Leergut
                                <input type="radio" name="distributionOption" value="vollgut" defaultChecked={distributionOption === "vollgut" ? "checked" : ""} /> Vollgut
                            </form>
                        <AnalyticsDistribution data={distributions} distributionOption={distributionOption} />
                    </div>
                </div>
                <div style={{ display: 'flex', alignContent: 'stretch', alignItems: 'center' }}>
                    <div style={{ flexGrow: 1 }}>
                        <p>Average length of stay in zone: </p>
                        <select onChange={this.handleZoneOption.bind(this)} value={this.props.zoneOption}>
                            {this.renderZoneOption()}
                        </select>
                        <AnalyticsZone data={zones} zoneOption={zoneOption}/>
                    </div>
                    <div style={{ height: '20vh', width: '40%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyClKPlFtNG0CSfx20Rug1MXpDxctm22aZo' }}
                            center={zoneLocation}
                            zoom={11}
                        >
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    deliveries: state.analytics.deliveries,
    distributions: state.analytics.distributions,
    throughputs: state.analytics.throughputs,
    zones: state.analytics.zones,
    deliveryOption: state.analytics.deliveryOption,
    distributionOption: state.analytics.distributionOption,
    zoneOption: state.analytics.zoneOption,
    zoneLocation: state.analytics.zoneLocation,
    numbers: state.analytics.numbers,
});

export default
    connect(
        mapStateToProps,
        {
            analyticsDelivery,
            analyticsDistribution,
            analyticsThroughput,
            analyticsZone,
            deliveryOptionChanged,
            distributionOptionChanged,
            zoneOptionChanged
        }
    )(AnalyticsDetails);