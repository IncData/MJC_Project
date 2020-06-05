import React, {useState} from 'react';
import MapContainer from "./mapContainer.js";

import './index.css';

const AboutUSPage = () => {
    return (
        <div className="container">
            <h2 className="sectionTitle">Qui sommes nous? </h2>
            <div className="aboutUs">

                <div className="App mapContainer">
                    <MapContainer/>
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