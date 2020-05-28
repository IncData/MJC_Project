import React from 'react';
import './index.css';
//import NewsSidebar from '../news-sidebar';

import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";
const UserProfile = () => {
    return (

        <div className="container">
            <h2 className="sectionTitle">All My Activities</h2>
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
                <button type="contact-button" class="button">Send an email to Responsible</button>
            </div><br/>
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
                <p>Description Description Description Description Description Description</p>
            </div>
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
                <p>Description Description Description Description Description Description</p>
            </div>
            <div>
                <h3>Title</h3>
                <h6>Date of publication</h6>
                <h6>Activity type : Cultural / Sport</h6>
                <p>Description Description Description Description Description Description</p>
            </div>
        </div>

    );
}

export default UserProfile;