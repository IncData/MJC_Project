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
            userType:"",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to home page
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
      }

    componentWillReceiveProps(nextProps) {
        const user = this.props.auth;
        if (nextProps.auth.isAuthenticated && user.userType == "userTypeUser" ) {
            this.props.history.push("/profile"); // push user to home when they login
        }
        else {
            this.props.history.push("/aboutUs");
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
            password: this.state.password, 
            userType:this.state.userType,
        };
        console.log(userData);
        this.props.loginUser(userData); 
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
                                <label htmlFor="password">Mot de passe</label><br/>
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
                                    Entrer
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

