import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Container from './components/container';
import Activities from './components/container';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/aboutUs' render={Container}/>
                <Route path='/activities' render={Activities}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
