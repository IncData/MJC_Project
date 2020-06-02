import React, {useEffect, useState} from 'react';
import axios from 'axios';
//import './index.css';
import DatePicker from "react-datepicker";
//import Select from 'react-select';
import { Form } from 'react-bootstrap'

import "react-datepicker/dist/react-datepicker.css";

const Activity = () => {

    const [info, setInfo] = useState({
        activityTitle: "",
        activityDescription: "",
        activityResponsibleName: "",
        activityResponsibleEmail: "",
        activityResponsiblePhone: "",
        activityAddress: "",
        activityCity: "",
        activityZip: "",
        activityTypeSportive: false,
        activityTypeCultural: false,
        startDate: new Date(),
        activityStart: '',
        activityEnd: '',
        selectedOption: null,
        rooms : []

    });

    useEffect(() => {
        axios.get('http://localhost:4000/api/admin/getRooms')
            .then((data) => {
                //console.log(data.data.result);
                //console.log(info.rooms)
                setInfo({...info, rooms : [...data.data.result] })
            })
            .catch(error => console.log(error))

    }, [])

    const handelChange = name => event => {
        if (name === 'activityTypeSportive') {
            setInfo({...info, activityTypeSportive: !info.activityTypeSportive})
        } else if (name === 'activityTypeCultural') {
            setInfo({...info, activityTypeCultural: !info.activityTypeCultural})
        } else {
            setInfo({...info, [name]: event.target.value})
        }
    };

    const changeDate = (date) => {
        //console.log(date);
        setInfo({...info, startDate: date});
    };

    const chooseImage = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        console.log(file);
        reader.readAsDataURL(file);
        reader.onload = function() {
            setInfo({ ...info,
                image: file
            })
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('activityTitle', info.activityTitle);
        formData.append('activityDescription', info.activityDescription);
        formData.append('activityResponsibleName', info.activityResponsibleName);
        formData.append('activityResponsibleEmail', info.activityResponsibleEmail);
        formData.append('activityResponsiblePhone', info.activityResponsiblePhone);
        formData.append('activityAddress', info.activityAddress);
        formData.append('activityCity', info.activityCity);
        formData.append('activityZip', info.activityZip);
        formData.append('activityTypeSportive', info.activityTypeSportive);
        formData.append('activityTypeCultural', info.activityTypeCultural);
        formData.append('startDate', new Date());
        formData.append('activityStart', info.activityStart);
        formData.append('activityEnd', info.activityEnd);
        formData.append('selectedOption', info.selectedOption);
        formData.append('rooms', info.rooms);
        if(info.image !== null)
            formData.append('activityPhoto', info.image, info.image.name);


        const url = `http://localhost:4000/api/admin/createActivity`;
        //console.log('start')
        axios({
            method: 'post',
            url: url,
            data: formData,
            headers: { 'Accept': 'application/json' },
        })
            .then(({data}) => {
                console.log('end')
                const {message} = data;
                console.log(message)
            })
            .catch(error => console.log(error));
    };

   const handleChangeSelectBar = () => {
        return info.rooms.map((e, i) => {
            return <option value={e._id} key={i}>{e.name}</option>
        })
    };

    const selectRoom =(event) => {
        console.log(event.target.value)
        setInfo({...info, selectedOption: event.target.value})
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

                <Form.Control as="select" custom className="inpSalle" onChange={selectRoom}>
                    {
                        handleChangeSelectBar()
                    }
                </Form.Control>
                <br/>
                <br/>
                <div className="form-group divHour">
                    <p>Veuillez préciser les horaires : </p> <br/>
                    <input type="Number" onChange={handelChange('activityStart')} id="inputTitle"
                           className="form-control inputHour" placeholder="From"
                           required/> <br/>
                    <span>-</span>
                    <input type="Number" onChange={handelChange('activityEnd')} id="inputTitle"
                           className="form-control inputHour" placeholder="To"
                           required/><br/>
                </div>

                <div className="form-group">
                    <label>Title</label>
                    <input type="text" onChange={handelChange('activityTitle')} id="inputTitle" className="form-control"
                           placeholder="Start with a title"
                           required/><br/>
                </div>


                <div className="form-group">
                    <label>Decription textarea</label>
                    <textarea onChange={handelChange('activityDescription')} className="form-control"
                              rows="3"></textarea>
                </div>

                <div className="form-group">
                    <label>Adresse of activity</label>
                    <input onChange={handelChange('activityAddress')} placeholder="123 rue de la rue"
                           className="form-control"></input>
                </div>

                <div className="form-group">
                    <label>City of activity</label>
                    <input onChange={handelChange('activityCity')} className="form-control"></input>
                </div>

                <div className="form-group">
                    <label>Zip of activity</label>
                    <input onChange={handelChange('activityZip')} className="form-control"></input>
                </div>

                <div className="form-group">
                    <label><strong>Activity Responsible </strong></label><br/>
                    <label>Name </label>
                    <input type="text" onChange={handelChange('activityResponsibleName')} id="inputTitle"
                           className="form-control" placeholder="Reponsible Name"
                           required/><br/>
                    <label>Email </label>
                    <input type="email" onChange={handelChange('activityResponsibleEmail')} id="inputEmail"
                           className="form-control" placeholder="Reponsible Email"
                           required/><br/>
                    <label>Phone Number </label>
                    <input type="tel" onChange={handelChange('activityResponsiblePhone')} id="inputPhone"
                           className="form-control" placeholder="Reponsible Phone"
                           required/><br/>

                </div>

                <p>Activity Type </p>
                <div className="form-check form-check-inline">
                    <label className="checkboxLabel">
                        Sportive
                        <input
                            name="sportive"
                            type="checkbox"
                            onChange={handelChange('activityTypeSportive')}/>
                    </label>
                    <label>
                        Cultural
                        <input
                            name="cultural"
                            type="checkbox"
                            onChange={handelChange('activityTypeCultural')}/>
                    </label>
                </div>
                <br/><br/>
                <input onChange={chooseImage} type="file"/>

                <button className="btn btn-lg btn-primary btn-block inpPublier" type="submit">Publier</button>

            </div>
        </form>
    )

}


const CreateActivity = () => {

    return <Activity/>

}
export default CreateActivity;