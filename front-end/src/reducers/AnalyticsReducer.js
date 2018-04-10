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
} from '../actions/types';

const INITIAL_STATE = {
    ids: [],
    error: '',
    deliveries: '',
    distributions: '',
    throughputs: '',
    zones: '',
    numbers: '',
    deliveryOption: 'week',
    distributionOption: 'alle',
    zoneOption: '',
    zoneLocation: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ANALYTICS_LIST_REQUESTED:
            return { ...state };
        case ANALYTICS_LIST_SUCCESSED:
            return { ...state, ids: action.payload };
        case ANALYTICS_LIST_FAILED:
            return { ...state, error: action.payload };
        case ANALYTICS_DELIVERY_REQUESTED:
            return { ...state };
        case ANALYTICS_DELIVERY_SUCCESSED:
            return { ...state, deliveries: action.payload.deliveries };
        case ANALYTICS_DELIVERY_FAILED:
            return { ...state, error: action.payload };
        case ANALYTICS_DISTRIBUTION_REQUESTED:
            return { ...state };
        case ANALYTICS_DISTRIBUTION_SUCCESSED:
            return { ...state, distributions: action.payload.distribution  };
        case ANALYTICS_DISTRIBUTION_FAILED:
            return { ...state, error: action.payload };
        case ANALYTICS_THROUGHPUT_REQUESTED:
            return { ...state };
        case ANALYTICS_THROUGHPUT_SUCCESSED:
            return { ...state, throughputs: action.payload.throughput  };
        case ANALYTICS_THROUGHPUT_FAILED:
            return { ...state, error: action.payload };
        case ANALYTICS_ZONES_REQUESTED:
            return { ...state };
        case ANALYTICS_ZONES_SUCCESSED:
            return { ...state, zones: action.payload.zones, zoneOption: action.payload.zones[0].name, zoneLocation: action.payload.location, numbers: action.payload.numbers };
        case ANALYTICS_ZONES_FAILED:
            return { ...state, error: action.payload };
        case DELIVERY_OPTION_CHANGE:
            return { ...state, deliveryOption: action.payload };
        case DISTRIBUTION_OPTION_CHANGE:
            return { ...state, distributionOption: action.payload };
        case ZONE_OPTION_CHANGE:
            return { ...state, zoneOption: action.payload };
        default:
            return state;
    }
};