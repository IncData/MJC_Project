import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import classnames from "classnames";
import './index.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/profile"); // push user to home when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };


    render() {
        const {errors} = this.state;
        return (
            <div className="container">
                <div style={{marginTop: "4rem"}} className="row">
                    <div className="col s8 offset-s2">
                        <h1 className="sectionTitle">Bonjour les Pangolins</h1>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12 loginInp">
                                <label htmlFor="email">Email</label> <br/>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    style={{
                                        width: "50%",

                                    }}
                                    className={classnames("", {
                                        invalid: errors.email || errors.invalidemail
                                    })}
                                />

                                <span className="red-text">
                  {errors.email}
                                    {errors.invalidemail}
                </span>
                            </div>
                            <div className="input-field col s12 loginInp">
                                <label htmlFor="password">Password</label><br/>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    style={{
                                        width: "50%",

                                    }}
                                    className={classnames("", {
                                        invalid: errors.password || errors.passwordincorrect
                                    })}
                                />

                            </div>
                            <div className="col s12 loginInp" style={{paddingLeft: "11.250px"}}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    {loginUser}
)(Login);


// const UserLogin = () => {
//   return <Login />
// }
// export default UserLogin;


// import React, {useState} from 'react';
// import axios from 'axios';
// import './index.css';


// const Login = () => {

//   const [info, setInfo] = useState({
//     email: "",
//     password: ""
// })

// const handleSubmit = () => {
//   //event.preventDefault();
//   //console.log("24");
//   const url = `http://localhost:4000/api/admin/login`;
//   console.log(info, 'info');
//   axios.post(url, info)
//       .then(({data}) => {
//           const { status, message } = data;
//           console.log(data);
//           if(status){
//               console.log(status)
//               //setMessage(message)
//           }
//       })
//       .catch(error => console.log(error));


// }


//     return (
//         <div className="container">
//             <form className="form-signin" onSubmit={handleSubmit}>
//                 <div className="text-center mb-4">
//                     <img className="mb-4" src="Logo MJC à mettre"  width="72" height="72"/>
//                     <h1 className= "h3 mb-3 font-weight-normal"> MJC Strasbourg/Petite France</h1>
//                     <p>
//                         Hey! do not forget to log in
//                     </p>
//                 </div>
//                 <div className="form-label-group">
//                     <label>Email address</label>
//                     <input type="email" onChange={handleSubmit('email')} id="inputEmail" className="form-control" placeholder="Email address" required /> <br/>

//                 </div>
//                 <div className="form-label-group">
//                     <label>Password</label>
//                     <input type="password" onChange={handleSubmit('password')} id="inputPassword" className="form-control" placeholder="Password" required/>

//                 </div>
//                 <br/>

//                 <div className="checkbox mb-3">
//                     <label>
//                     <input type="checkbox" value="remember-me"/>Remember me
//                 </label>
//                 </div>
//                 <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
//                 <p className="mt-5 mb-3 text-muted text-center">© MJC Strasbourg 2020</p>
//             </form>
//         </div>
//     )
// }

// const Login1 = () => {
//   return <Login />
// }
// export default Login1;