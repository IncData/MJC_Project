import React, { Component } from 'react';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Container from './components/container';
import AboutUs from './components/about-us';
import Activities from './components/activities';
import News from './components/news';
import CreateActivity from './components/admin/createActivity';
import Admin from './components/admin/admin';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Header/>
              <Container>
                  <React.Suspense fallback={loading()}>
                    <Switch>
                          <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                          <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
                          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
                          <Route path="/admin0" name="Home" render={props => <DefaultLayout {...props}/>} />
                          <Route path='/aboutUs' render={AboutUs}/>
                          <Route path='/activities' render={Activities}/>
                          <Route path='/news' render={News}/>
                          <Route path='/admin/createActivity' render={CreateActivity}/>
                          <Route path='/admin1' render={Admin}/>
                    </Switch>
                  </React.Suspense>
                </Container>
            <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
