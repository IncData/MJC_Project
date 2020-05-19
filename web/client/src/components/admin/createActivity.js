import React, { useState } from 'react';
import NewsSidebar from '../news-sidebar';

//import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";


const createActivity = () => {

    const [info , setInfo] = useState({
        activityTitle: '',
        activityDescription: '',
        activityResponsibleName : '',
        activityResponsibleEmail : ''
    })
    const handelChange = name => event => setInfo({...info,  [name]: event.target.value })
    return (
        <form onSubmit={this.handleSubmit}>
            <div className="container">
                <div className="text-center mb-4">
                    {/*<img className="mb-4" src="Logo MJC à mettre" alt width="72" height="72"/>*/}
                    <h1 className="h3 mb-3 font-weight-normal"> MJC Strasbourg/Petite France</h1>
                    <p>
                        Hey Admin! Do your stuff here! Impossible is nothing!
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="meeting-time">Choose a time for your appointment:</label>
                    <input type="datetime-local" id="meeting-time"
                           name="meeting-time" value="2018-06-12T19:30"
                           min="2018-06-07T00:00" max="2018-06-14T00:00"></input>
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" onChange={handelChange('activityTitle')} id="inputTitle" className="form-control" placeholder="Start with a title"
                           required/><br/>
                </div>


                <div className="form-group">
                    <label>Decription textarea</label>
                    <textarea onChange={handelChange('activityDescription')} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br/>

                <div className="form-group">
                    <label><strong>Activity Responsible </strong></label><br/>
                    <label>Name </label>
                    <input type="text" onChange={handelChange('activityResponsibleName')} id="inputTitle" className="form-control" placeholder="Reponsible Name"
                           required/><br/>
                    <label>Email </label>
                    <input type="email" onChange={handelChange('activityResponsibleEmail')} id="inputEmail" className="form-control" placeholder="Reponsible Email"
                           required/><br/>
                    <label>Phone Number </label>
                    <input type="tel" id="inputPhone" className="form-control" placeholder="Reponsible Phone"
                           required/><br/>
                    <p><strong>Adresse of Responsible</strong></p>
                    <label htmlFor="inputNo">Number</label>
                    <input type="number" className="form-control" id="inputNumber"></input><br/>
                    <label htmlFor="inputAddress">Street</label>
                    <input type="text" className="form-control" id="inputAddress"
                           placeholder="123 rue de la rue"></input><br/>
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"></input><br/>
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"></input><br/>

                    {/* TO DEVELOP ACCORDING DB MODEL */}
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Sports</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Cultural</label>
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Publish Activity</button>
                <p className="mt-5 mb-3 text-muted text-center">© MJC Strasbourg 2020</p>

            </div>
        </form>


    )
}
export default createActivity;