import axios from 'axios'
import {
    ANALYTICS_LIST_REQUESTED,
    ANALYTICS_LIST_SUCCESSED,
    ANALYTICS_LIST_FAILED,
    ANALYTICS_DELIVERY_REQUESTED,
    ANALYTICS_DELIVERY_SUCCESSED,
    ANALYTICS_DELIVERY_FAILED,
    ANALYTICS_DISTRIBUTION_REQUESTED,
    ANALYTICS_DISTRIBUTION_SUCCESSED,
    ANALYTICS_DISTRIBUTION_FAILED,
    ANALYTICS_THROUGHPUT_REQUESTED,
    ANALYTICS_THROUGHPUT_SUCCESSED,
    ANALYTICS_THROUGHPUT_FAILED,
    ANALYTICS_ZONES_REQUESTED,
    ANALYTICS_ZONES_SUCCESSED,
    ANALYTICS_ZONES_FAILED,
    DELIVERY_OPTION_CHANGE,
    DISTRIBUTION_OPTION_CHANGE,
    ZONE_OPTION_CHANGE
} from './types';
import { apiUrl } from '../config'
const url = apiUrl;

export const analyticsList = () => {
    return (dispatch) => {
        dispatch({ type: ANALYTICS_LIST_REQUESTED });

        axios.get(`${url}/analytics`)
            .then(function (response) {
                dispatch({ type: ANALYTICS_LIST_SUCCESSED, payload: response.data });
            })
            .catch(function (error) {
                dispatch({ type: ANALYTICS_LIST_FAILED, payload: error });
            });
    };
};

export const analyticsDelivery = (id, deliveryOption) => {
    return (dispatch) => {
        dispatch({ type: ANALYTICS_DELIVERY_REQUESTED });

        axios.get(`${url}/analytics/${id}/delivery?${deliveryOption}`)
            .then(function (response) {
                dispatch({ type: ANALYTICS_DELIVERY_SUCCESSED, payload: response.data });
            })
            .catch(function (error) {
                dispatch({ type: ANALYTICS_DELIVERY_FAILED, payload: error });
            });
    };
};

export const analyticsDistribution = (id) => {
    return (dispatch) => {
        dispatch({ type: ANALYTICS_DISTRIBUTION_REQUESTED });

        axios.get(`${url}/analytics/${id}/distribution`)
            .then(function (response) {
                dispatch({ type: ANALYTICS_DISTRIBUTION_SUCCESSED, payload: response.data });
            })
            .catch(function (error) {
                dispatch({ type: ANALYTICS_DISTRIBUTION_FAILED, payload: error });
            });
    };
};

export const analyticsThroughput = (id) => {
    return (dispatch) => {
        dispatch({ type: ANALYTICS_THROUGHPUT_REQUESTED });

        axios.get(`${url}/analytics/${id}/throughput`)
            .then(function (response) {
                dispatch({ type: ANALYTICS_THROUGHPUT_SUCCESSED, payload: response.data });
            })
            .catch(function (error) {
                dispatch({ type: ANALYTICS_THROUGHPUT_FAILED, payload: error });
            });
    };
};

export const analyticsZone = (id) => {
    return (dispatch) => {
        dispatch({ type: ANALYTICS_ZONES_REQUESTED });

        axios.get(`${url}/analytics/${id}`)
            .then(function (response) {
                dispatch({ type: ANALYTICS_ZONES_SUCCESSED, payload: response.data });
            })
            .catch(function (error) {
                dispatch({ type: ANALYTICS_ZONES_FAILED, payload: error });
            });
    };
};

export const deliveryOptionChanged = (value) => {
    return {
        type: DELIVERY_OPTION_CHANGE,
        payload: value
    };
};

export const distributionOptionChanged = (value) => {
    return {
        type: DISTRIBUTION_OPTION_CHANGE,
        payload: value
    };
};

export const zoneOptionChanged = (value) => {
    return {
        type: ZONE_OPTION_CHANGE,
        payload: value
    };
};