import React from 'react';
import './index.css';
//import NewsSidebar from '../news-sidebar';

import './index.css';
//import aboutUsLogo from "../../logo/mjc_about_us.png";
const Dashboard = () => {
    return (

        <div class="sidebarr">
            <a class="active" href="#home">Home</a>
            <a href="/admin/createUser">Create User</a>
            <a href="/admin/createActivity">CreateActivity</a>
            <a href="#about">About</a>
        </div>

    );
}

export default Dashboard;