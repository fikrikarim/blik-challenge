import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Analytics from './components/Analytics'
import AnalyticsDetails from './components/AnalyticsDetails'

const App = () => (
    <div>   
        <header>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/analytics">Analytics</Link>
        </header>

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/analytics" component={Analytics} />
            <Route exact path="/analytics/:id" component={AnalyticsDetails} />
        </main>
    </div>
)

export default App