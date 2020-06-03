import React from 'react';
import './index.css';
//import NewsSidebar from '../news-sidebar';

import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";

const UserProfile = ({match}) => {
    console.log(match.params.id) //esia Tat   lsi, myus texy bayc match chkar, ,spasi search ara projecti mech match
    return (

        <div className="container">
            <h2 className="sectionTitle">All My Activities</h2>
            <div>
                <img
                    alt=""
                    src={aboutUsLogo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />
                <h3>Terres d’Oh ! Balades sur les rives et canaux d’Alsace et de Lorraine</h3>
                <h6>22/05/2020</h6>
                <h6>Sportive</h6>
                <p>Pour l’heure d’un déconfinement progressif, le tourisme de proximité est à privilégier. Exit le tourisme de masse et revenons quelques années en arrière tout en profitant des nouvelles technologies et le numérique qui nous aident à préparer notre séjour.</p>
                {/*<button type="contact-button" class="button">Send an email to Responsible</button>*/}
            </div><br/>

        </div>

    );
}

export default UserProfile;