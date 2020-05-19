import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from "../../logo/LogoMJC.png";
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <Navbar className="headerSection" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div> <img
                alt=""
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
            />

                <span className="logotitle">MJC LES PANGOLINS </span>
                <p className="subTitle">MAISON DES JEUNES ET DE LA CULTURE </p> </div>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <div>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbarMenu mr-auto d-flex headerMenu">
                    <Nav>
                        <Link to='/aboutUs'>
                            About Us
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to='/activities'>
                           Activities
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to='/test2'>
                            Profile
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to='/login'>
                            Login
                        </Link>
                    </Nav>
                    {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>*/}
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    )
}
