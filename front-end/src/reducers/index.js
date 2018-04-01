import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import analytics from './AnalyticsReducer'

export default combineReducers({
    routing: routerReducer,
    analytics
})