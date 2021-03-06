import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from "../../logo/LogoMJC.png";
import {Link} from 'react-router-dom'
import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

class Header extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const {user} = this.props.auth; //imported to use to say hello to user on navbar
        //console.log(user.id);
        return (
            <Navbar className="headerSection" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div><img
                    alt=""
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />

                    <span className="logotitle">MJC LES PANGOLINS </span>
                    <p className="subTitle">MAISON DES JEUNES ET DE LA CULTURE </p></div>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbarMenu mr-auto d-flex headerMenu">
                            <Nav>
                                <Link to='/aboutUs'>
                                Qui sommes-nous? 
                                </Link>
                            </Nav>
                            <Nav>
                                <Link to='/activities'>
                                Nos activités
                                </Link>
                            </Nav>
                            {user.id ?
                                <Nav>
                                    <Link to={'/profile/' + user.id}>
                                    Mon profile
                                    </Link>
                                </Nav>
                                : null}

                            {!user.id ?
                                <Nav>
                                    <Link to='/login'>
                                    Se connecter
                                    </Link>
                                </Nav>
                            : null }
                            {user.id ?
                                <Nav>
                                    <Link to='/login' onClick={this.onLogoutClick}>
                                    Déconnecter
                                    </Link>
                                </Nav>
                            : null}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    };
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    {logoutUser}
)(Header);

