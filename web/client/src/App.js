import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Container from './components/container';
import AboutUs from './components/about-us';
import Activities from './components/activities';
import News from './components/news';
import createActivity from './components/admin/createActivity';
import Admin from './components/admin/admin';

import './App.css';
const App = () => {
    return (
        <BrowserRouter>
            <Header/>
                <Container>
                    <Switch>
                        <Route path='/aboutUs' render={AboutUs}/>
                        <Route path='/activities' render={Activities}/>
                        <Route path='/news' render={News}/>
                        <Route path='/admin/createActivity' render={createActivity}/>
                        <Route path='/admin' render={Admin}/>
                    </Switch>
                </Container>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
