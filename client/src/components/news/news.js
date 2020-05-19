import React from 'react';
import NewsSidebar from '../news-sidebar';

import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";
const News = () => {
    return (
        <div className="container">
            <h2 className="sectionTitle">News</h2>
            <div>
                <img
                    alt=""
                    src={aboutUsLogo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                />
                <h3>Title</h3>
                <h6>Date of publication</h6>
                <h6>Activity type : Cultural / Sport</h6>
                <p>Description Description Description Description Description Description Description Description
                    Description Description Description Description Description Description Description Description</p>

                <div className="infoPratique">
                    <div>
                        <h4>Infos pratiques</h4>
                        <p>2 rue du Stade</p>
                        <p>Pôle culturel</p>
                        <p>67410  Drusenheim</p>
                    </div>
                    <div>
                        <h4>Horaires :</h4>
                        <h5><u>Ouverture du Pôle Culturel / Billetterie</u></h5>
                        <p>Mardi de 14h à 19h</p>
                        <p>Mercredi de 10h à 12h et de 14h à 19h</p>
                        <p>Jeudi de 14h à 18h</p>
                        <p>Vendredi de 14h à 19h</p>
                        <p>Samedi de 9h30 à 12h30</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default News;