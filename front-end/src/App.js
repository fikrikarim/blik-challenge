import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Analytics from './components/Analytics'
import AnalyticsDetails from './components/AnalyticsDetails'
import Header from './components/Header'

const App = () => (
    <Header>
        <Route exact path="/" component={Home} />
        <Route exact path="/analytics" component={Analytics} />
        <Route exact path="/analytics/:id" component={AnalyticsDetails} />
    </Header>
)

export default App