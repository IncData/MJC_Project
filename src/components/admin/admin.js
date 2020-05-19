// import React from "react";
// import {Button} from "react-bootstrap";
// //import API from "../utils/API";
// import Input from '../input/Input';

// export class Admin extends React.Component {
//     state = {
//         name: "",
//         password: "",
//         displaySnackBar: false
//     };
//     // send = async () => {
//     //     const {name, password} = this.state;
//     //     try {
//     //         const {data} = await API.login(name, password);
//     //         localStorage.setItem("token", data.token);
//     //         localStorage.setItem("id", data.id);
//     //         console.log(data);
//     //         this.props.history.push(`listUser/${data.id}`);
//     //     } catch (error) {
//     //         console.error(error.response.data.text);
//     //         this.setState({snackMessage: error.response.data.text});
//     //         this.handleSnackbar();
//     //     }
//     // };
//     // handleChange = (event) => {
//     //     this.setState({
//     //         [event.target.id]: event.target.value
//     //     });
//     // };
//     // handleSnackbar = () => {
//     //     this.setState({displaySnackBar: true});
//     //     setTimeout(() => this.setState({displaySnackBar: false}), 3000);
//     // };

//     render() {
//         const {name, password, snackMessage} = this.state;
//         return (
//             <div className="Login mt-4">
//                 <h1>Login</h1>
//                 <div className="LoginForm mt-5">
//                     <Input name="Username" value={name} controlId="name" changeValue={this.handleChange}/>
//                     <Input name="Password" value={password} controlId="password" changeValue={this.handleChange}/>
//                     <Button className="btn btn-success" onClick={this.send} block bssize="large" type="submit">
//                         Connexion
//                     </Button>
//                     <br/>
//                     <a className="aboutAccount" href="/signup">Don't have an account yet? Sign up!</a>
//                     {this.state.displaySnackBar ? (
//                         <div class="alert alert-danger mt-4 border-danger" role="alert" id="snackbar"
//                              style={{fontSize: "15px"}}>
//                             {snackMessage}
//                         </div>
//                     ) : null}
//                 </div>
//             </div>
//         );
//     }
// };

// export default Admin;





import React from 'react';
import NewsSidebar from '../news-sidebar';

//import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";
const Admin = () => {
    return (
        <div className="container">
            <form class="form-signin">
                <div class="text-center mb-4">
                    <img class="mb-4" src="Logo MJC à mettre" alt width="72" height="72"/>
                    <h1 class= "h3 mb-3 font-weight-normal"> MJC Strasbourg/Petite France</h1>
                    <p>
                        Hey Admin!, do not forget to log in
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
export default Admin;