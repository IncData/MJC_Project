import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Header from './components/header';
import Footer from './components/footer';
import Container from './components/container';
import AboutUs from './components/about-us';
import Activities from './components/activities';
import Activity from './components/each-activity';
import CreateActivity from './components/admin/createActivity';
import Dashboard from './components/admin/dashboard';
import CreateUser from './components/admin/createUser';
import UserProfile from './components/user/user-profile'
import Login from './components/auth/login'
import { Provider } from "react-redux";
import store from "./store";

import './App.css';
const App = () => {
    return (
        <Provider store={store}> 
            <BrowserRouter>
                <Header/>
                    <Container>
                        <Switch>
                            <Route path='/profile' render={UserProfile}/>
                            <Route path='/aboutUs' render={AboutUs}/>
                            <Route path='/activities' render={Activities}/>
                            <Route path='/item/:id' render={Activity}/>
                            <Route path='/admin/createActivity' render={CreateActivity}/>
                            <Route path='/admin/dashboard' render={Dashboard}/>
                            <Route path='/admin/createuser' render={CreateUser}/>
                            <Route path='/login' component={Login} />
                            
                            
                        </Switch>
                    </Container>
                <Footer/>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
