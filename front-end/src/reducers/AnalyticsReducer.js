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
} from '../actions/types';

const INITIAL_STATE = {
    ids: [],
    error: '',
    deliveries: '',
    distributions: '',
    throughputs: ''
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
            return { ...state, throughputs: action.payload.week  };
        case ANALYTICS_THROUGHPUT_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};