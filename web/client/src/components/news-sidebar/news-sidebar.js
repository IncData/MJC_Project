import React from 'react';


import './index.css'

const NewsSidebar = () => {
    return (
        <div className="sidebar">
            <div className="newsDiv">
                <h6><b>Terres d’Oh ! Balades sur les rives et canaux d’Alsace et de Lorraine</b></h6>
                <p>Pour l’heure d’un déconfinement progressif, le tourisme de proximité est à privilégier. Exit le tourisme de masse et revenons quelques années en arrière tout en profitant des nouvelles technologies et le numérique qui nous aident à préparer notre séjour.</p>
            </div>
            <br/>
            <div className="newsDiv">
                <h6><b>Randonnée gourmande Ottrottoise 2020</b></h6>
                <p>La 18ème édition de la Randonnée gourmande d'Ottrott se déroule le dimanche 14 juin 2020, sur un parcours qui vous fera découvrir le village niché au pied du Mont Sainte-Odile.</p>
            </div>
        </div>
    )
}

export default NewsSidebar;