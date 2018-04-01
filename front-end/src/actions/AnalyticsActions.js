import axios from 'axios'
import {
    ANALYTICS_LIST_REQUESTED,
    ANALYTICS_LIST_SUCCESSED,
    ANALYTICS_LIST_FAILED
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