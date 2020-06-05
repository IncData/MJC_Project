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
import Home from './components/home/index'
import Login from './components/auth/login'
import { Provider } from "react-redux";
import store from "./store";
import './App.css';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "/login";
    }
  }
//createStore() creates a Redux store that holds 
//the complete state tree of our app. 
//There should only be a single store in any app.

const App = () => {
    return (
        <Provider store={store}> 
            <BrowserRouter>
                <Header/>
                    <Container>
                        <Switch>
                            <Route path='/profile/:id' render={UserProfile}/>
                            <Route path='/aboutUs' render={AboutUs}/>
                            <Route path='/activities' render={Activities}/>
                            <Route path='/item/:id' render={Activity}/>
                            <Route path='/admin/createactivity' render={CreateActivity}/>
                            <Route path='/admin/dashboard' render={Dashboard}/>
                            <Route path='/admin/createuser' render={CreateUser}/>
                            <Route path='/login' component={Login} />
                            <Route path='/' render={Home}/>
                        </Switch>
                    </Container>
                <Footer/>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
