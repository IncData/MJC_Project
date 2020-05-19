import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import './index.css';
import facebookLogo from "../../logo/facebook-logo.png";
import instagramLogo from "../../logo/instagram-logo.png";
import twitterLogo from "../../logo/twitter-logo.png";

const Footer = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                    <div className="footerContent">
                        <div>
                            <MDBCol md="12">
                                <h5 className="title">Abonnez-vous à la newsletter MJC</h5>
                                <div className="newsletterMjc">
                                    <div>
                                        <input type="text"/>
                                    </div>
                                    <div>
                                        <button>Submit</button>
                                    </div>
                                </div>
                            </MDBCol>
                        </div>
                        <div>
                            <MDBCol md="12">
                                <h5 className="title">Nous rejoindre</h5>
                                <div className="footerLogo">
                                    <img
                                        alt=""
                                        src={facebookLogo}
                                        width="20"
                                        height="20"
                                        className="d-inline-block align-top"
                                    />
                                    <img
                                        alt=""
                                        src={instagramLogo}
                                        width="20"
                                        height="20"
                                        className="d-inline-block align-top"
                                    />
                                    <img
                                        alt=""
                                        src={twitterLogo}
                                        width="20"
                                        height="20"
                                        className="d-inline-block align-top"
                                    />
                                </div>
                                {/*<ul>
                            <li className="list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>*/}
                            </MDBCol>
                        </div>
                    </div>

            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a
                    href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;




