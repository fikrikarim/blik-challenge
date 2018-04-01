import {
    ANALYTICS_LIST_REQUESTED,
    ANALYTICS_LIST_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    ids: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ANALYTICS_LIST_REQUESTED:
            return { ...state };
        case ANALYTICS_LIST_SUCCESS:
            return { ...state };
        default:
            return state;
    }
};