import React, { useState } from 'react';
import axios from 'axios';
//import './index.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Activity = () => {

    const [info , setInfo] = useState({
        activityTitle: "",
        activityDescription: "",
        activityResponsibleName : "",
        activityResponsibleEmail : "",
        activityResponsiblePhone : "",
        activityAddress : "",
        activityCity : "",
        activityZip : "",
        activityTypeSportive: false,
        activityTypeCultural: false,
        startDate: new Date()

    })

    const handelChange = name => event => {
        if(name === 'activityTypeSportive') {
            setInfo({...info,  activityTypeSportive: !info.activityTypeSportive})
        } else if(name === 'activityTypeCultural') {
            setInfo({...info,  activityTypeCultural: !info.activityTypeCultural})
        } else {
            setInfo({...info,  [name]: event.target.value })
        }

    }
    const changeDate = (date) => setInfo({...info, startDate: date})

    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log(info)
        const url = `http://localhost:4000/api/admin/createActivity`;

        axios.post(url, info)
            .then(({data}) => {
                const { status, message } = data;
                if(status){
                    console.log(status)
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
                    <DatePicker
                        selected={info.startDate}
                        onChange={changeDate}
                    />
                </div> 
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" onChange={handelChange('activityTitle')} id="inputTitle" className="form-control" placeholder="Start with a title"
                           required/><br/>
                </div>


                <div className="form-group">
                    <label>Decription textarea</label>
                    <textarea onChange={handelChange('activityDescription')} className="form-control"  rows="3"></textarea>
                </div>

                <div className="form-group">
                    <label>Adresse of activity</label>
                    <input onChange={handelChange('activityAddress')} placeholder="123 rue de la rue" className="form-control" ></input>
                </div>

                <div className="form-group">
                    <label>City of activity</label>
                    <input onChange={handelChange('activityCity')} className="form-control" ></input>
                </div>

                <div className="form-group">
                    <label>Zip of activity</label>
                    <input onChange={handelChange('activityZip')} className="form-control" ></input>
                </div>

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

                </div>

                <p>Activity Type </p>
                <div className="form-check form-check-inline">
                    <label>
                        Sportive
                        <input
                            name="sportive"
                            type="checkbox"
                            onChange={handelChange('activityTypeSportive')} />
                    </label>
                    <label>
                        Cultural
                        <input
                            name="cultural"
                            type="checkbox"
                            onChange={handelChange('activityTypeCultural')} />
                    </label>
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