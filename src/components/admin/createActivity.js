import React from 'react';
import NewsSidebar from '../news-sidebar';

//import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";
const createActivity = () => {
    return (
        
        <div className="container">

                <div className="text-center mb-4">
                    {/*<img className="mb-4" src="Logo MJC à mettre" alt width="72" height="72"/>*/}
                    <h1 className= "h3 mb-3 font-weight-normal"> MJC Strasbourg/Petite France</h1>
                    <p>
                        Hey Admin! Do your stuff here! Impossible is nothing! 
                    </p>
                </div>
                <div className="form-group">
                <label for="meeting-time">Choose a time for your appointment:</label>
                <input type="datetime-local" id="meeting-time"
                    name="meeting-time" value="2018-06-12T19:30"
                    min="2018-06-07T00:00" max="2018-06-14T00:00"></input>
                </div>
                <div className="form-group">
                    <label >Title</label>
                    <input type="text" id="inputTitle" className="form-control" placeholder="Start with a title" required /><br/>
                </div>
                

                <div className="form-group">
                    <label >Decription textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br/>

                <div className="form-group">
                    <label ><strong>Activity Responsible </strong></label><br/>
                    <label >Name </label>
                    <input type="text" id="inputTitle" className="form-control" placeholder="Reponsible Name" required /><br/>
                    <label >Email </label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Reponsible Email" required /><br/>
                    <label >Phone Number </label>
                    <input type="tel" id="inputPhone" className="form-control" placeholder="Reponsible Phone" required /><br/>
                    <p><strong>Adresse of Responsible</strong></p>
                    <label for="inputNo">Number</label>
                    <input type="number" class="form-control" id="inputNumber"></input><br/>
                    <label for="inputAddress">Street</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="123 rue de la rue"></input><br/>
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity"></input><br/>
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"></input><br/>


                    {/* TO DEVELOP ACCORDING DB MODEL */}
                </div>


                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                    <label class="form-check-label" for="inlineCheckbox1">Sports</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                    <label class="form-check-label" for="inlineCheckbox2">Cultural</label>
                </div>
                
                <button className="btn btn-lg btn-primary btn-block" type="submit">Publish Activity</button>
                <p className="mt-5 mb-3 text-muted text-center">© MJC Strasbourg 2020</p>

        </div>
    )
}
export default createActivity;