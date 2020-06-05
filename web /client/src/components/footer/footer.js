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
                                        <button>Confirmer</button>
                                    </div>
                                </div>
                            </MDBCol>
                        </div>
                        <div>
                            <MDBCol md="12">
                                <h5 className="title">Nous rejoindre</h5>
                                <div className="footerLogo">
                                <a href="https://www.facebook.com/FDMJCAlsace/" target="_blank"><img
                                        alt=""
                                        src={facebookLogo}
                                        width="20"
                                        height="20"
                                        className="d-inline-block align-top"
                                    /></a>
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
                            </MDBCol>
                        </div>
                    </div>

            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; MJC Strasbourg {new Date().getFullYear()}
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;





