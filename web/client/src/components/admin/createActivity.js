import React, { useState } from 'react';
import axios from 'axios';
//import './index.css';


const Activity = () => {

    const [info , setInfo] = useState({
        activityTitle: "",
        activityDescription: "",
        activityResponsibleName : "",
        activityResponsibleEmail : "",
        activityResponsiblePhone : "",
        activityResponsibleAddress : "",
        activityResponsibleCity : "",
        activityResponsibleZip : "",
        activityType : ""

    })

    const handelChange = name => event => setInfo({...info,  [name]: event.target.value })

    const handleSubmit = () => {

        const url = `http://localhost:4000/api/admin/createActivity`;

        axios.post(url, info)
            .then(({data}) => {
                const { status, message } = data;
                if(status){
                    console.log(status)
                    //setMessage(message)
                }
            })
            .catch(error => console.log(error));
    }


    return (
        <form onSubmit={handleSubmit}>
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
                           name="meeting-time"
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
                    <input type="tel" onChange={handelChange('activityResponsiblePhone')} id="inputPhone" className="form-control" placeholder="Reponsible Phone"
                           required/><br/>
                    <p><strong>Adresse of Responsible</strong></p>
                    <label htmlFor="inputAddress">Street</label>
                    <input type="text" onChange={handelChange('activityResponsibleAddress')} className="form-control" id="inputAddress"
                           placeholder="123 rue de la rue"></input><br/>
                    <label htmlFor="inputCity">City</label>
                    <input type="text" onChange={handelChange('activityResponsibleCity')} className="form-control" id="inputCity"></input><br/>
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" onChange={handelChange('activityResponsibleZip')} className="form-control" id="inputZip"></input><br/>

                </div>

                {/*<div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" ></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Sports</label>
                </div>*/}
                <p>Activity Type </p>
                <div className="form-check form-check-inline">
                    <label>
                        Sportive
                        <input
                            name="sportive"
                            type="checkbox"
                            onChange={handelChange('activityType')} />
                    </label>
                    <label>
                        Cultural
                        <input
                            name="cultural"
                            type="checkbox"
                            onChange={handelChange('activityType')} />
                    </label>
                    {/*<input className="form-check-input" type="checkbox" id="inlineCheckbox2"></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Cultural</label>*/}
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Publish Activity</button>
                <p className="mt-5 mb-3 text-muted text-center">© MJC Strasbourg 2020</p>

            </div>
        </form>
    )

}


const CreateActivity = () => {

    return <Activity />

}
export default CreateActivity;