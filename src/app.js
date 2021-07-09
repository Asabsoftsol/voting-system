import React from 'react'
import Navbar from './partials/navbar'
import Register from './screen/register'
import Vote from './screen/vote'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
               <Route path="/" component={Register} exact />
               <Route path="/vote" component={Vote} exact />
            </Switch>
        </Router>
    )
}
export default App