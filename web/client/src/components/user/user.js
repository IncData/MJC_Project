import React from 'react';
import NewsSidebar from '../news-sidebar';

//import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";
const User = () => {
    return (
        <div className="container">
            <form class="form-signin">
                <div class="text-center mb-4">
                    <img class="mb-4" src="Logo MJC à mettre" alt width="72" height="72"/>
                    <h1 class= "h3 mb-3 font-weight-normal"> MJC Strasbourg/Petite France</h1>
                    <p>
                        Hey User!, Please log in! 
                    </p>
                </div>
                <div class="form-label-group">
                    <label for="inputEmail">Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/><br/>
                    
                </div>
                <div class="form-label-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                    
                </div>
                <br/>

                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"/>Remember me
                </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted text-center">© MJC Strasbourg 2020</p>
            </form>
        </div>
    )
}
export default User;