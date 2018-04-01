import {
    ANALYTICS_LIST_REQUESTED,
    ANALYTICS_LIST_SUCCESSED,
    ANALYTICS_LIST_FAILED,
} from '../actions/types';

const INITIAL_STATE = {
    ids: [],
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ANALYTICS_LIST_REQUESTED:
            return { ...state };
        case ANALYTICS_LIST_SUCCESSED:
            return { ...state, ids: action.payload };
        case ANALYTICS_LIST_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};