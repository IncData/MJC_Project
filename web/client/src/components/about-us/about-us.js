import React, { useState } from 'react';

import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";
import {Navbar} from "react-bootstrap";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const AboutUSPage = () => {
        const [ info, setInfo ] = useState({
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        });

        return (
            <div className="container">
                <h2 className="sectionTitle">Ubout Us</h2>
                <div className="aboutUs">
                    <div style={{ height: '200px', width: '300px' }}>
                       {/* <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyB_L1Xgdv7oDskZB2gsoSryXDTyjD327OY' }}
                            defaultCenter={info.center}
                            defaultZoom={info.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>*/}
                    </div>
                    <div className="aboutUsText">
                        <p>Les Maisons des Jeunes et de la Culture (MJC) sont nées après la Seconde Guerre Mondiale, dans
                            une
                            démarche d'instruction des jeunes. Aujourd'hui, les MJC en Alsace sont des lieux de culture et
                            de
                            loisirs, qui s'adressent aux enfants et ados comme à leurs aînés. Sport, ateliers, cours et
                            animations sont au programme de ces lieux particulièrement conviviaux.

                            D'abord destiné aux jeunes, les MJC s'ouvrent aujourd'hui à tout le monde. On y trouve de
                            nombreuses
                            activités, destinées à tous les curieux et passionnés : loisirs créatifs, ateliers découverte,
                            cours
                            de sport, animations ponctuelles... On ne s'ennuie pas dans les MJC !</p>
                    </div>
                </div>
            </div>
        )
    }

const AboutUs = () => {
    return <AboutUSPage/>

}

export default AboutUs;