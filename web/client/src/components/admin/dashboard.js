import React from 'react';
import './index.css';
const Dashboard = () => {
    return (

        <div class="container">
            <div class="ml-5">
                <div class="ml-5">
                    <div class="ml-5">
                        <div class="ml-5">
                            <a href="/admin/createActivity"> <button type="button" class="btn btn-lg btn-primary " >Créer une activité</button></a>
                            <a  href="/admin/createUser"><button type="button" class="btn btn-lg btn-primary " >Créer un utilisateur</button></a>
                            <a href="/home"><button type="button" class="btn btn-lg btn-primary" >Retourner à l'acceuil</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;