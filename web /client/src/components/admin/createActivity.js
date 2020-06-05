import React, {useEffect, useState} from 'react';
import axios from 'axios';
//import './index.css';
import DatePicker from "react-datepicker";
//import Select from 'react-select';
import { Form } from 'react-bootstrap'

import "react-datepicker/dist/react-datepicker.css";

const Activity = () => {
    const [ errorMessage , setErrorMessage ] = useState(null);
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
        selectedOption: '5ecf728e9275966aa5d18d71',
        rooms : []

    });

    useEffect(() => {
        axios.get('http://localhost:4000/api/admin/getRooms')
            .then((data) => {
                setInfo({...info, rooms : [...data.data.result] })
            })

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
        setInfo({...info, startDate: date});
    };

    const chooseImage = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.readAsDataURL(file);
        reader.onload = function() {
            setInfo({ ...info,
                image: file
            })
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let dateObj = info.startDate;
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        let newdate = day + "/" + month + "/" + year;

        console.log(info.selectedOption); return;

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
        formData.append('startDate', newdate);
        formData.append('activityStart', info.activityStart);
        formData.append('activityEnd', info.activityEnd);
        formData.append('selectedOption', info.selectedOption);
        formData.append('rooms', info.rooms);
        if(info.image && info.image !== null)
            formData.append('activityPhoto', info.image, info.image.name);


        const url = `http://localhost:4000/api/admin/createActivity`;
        axios({
            method: 'post',
            url: url,
            data: formData,
            headers: { 'Accept': 'application/json' },
        })
            .then(({data}) => {
                const {message} = data;
            }).catch(error => {
            setErrorMessage(error.message)
        })
    };

    const handleChangeSelectBar = () => {
        return info.rooms.map((e, i) => {
            return <option value={e._id} key={i}>{e.name}</option>
        })
    };

    const selectRoom =(event) => {
        setInfo({...info, selectedOption: event.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            { errorMessage !== null ? errorMessage : null }
            <div className="container">
                <div className="text-center mb-4">
                    {/*<img className="mb-4" src="Logo MJC à mettre" alt width="72" height="72"/>*/}
                    <h1 className="h3 mb-3 font-weight-normal"> MJC Strasbourg/Petite France</h1>
                    <p>
                        Bonjour Admin, Vous pouvez créer des activitiés par ici
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="meeting-time">Veuillez préciser la date de l'activité :</label><br/>
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
                    <label>Titre de l'activité</label>
                    <input type="text" onChange={handelChange('activityTitle')} id="inputTitle" className="form-control"
                           placeholder="Start with a title"
                           required/><br/>
                </div>


                <div className="form-group">
                    <label>Déscription de l'activité</label>
                    <textarea onChange={handelChange('activityDescription')} className="form-control"
                              rows="3"></textarea>
                </div>

                <div className="form-group">
                    <label>Adresse de l'activité</label>
                    <input onChange={handelChange('activityAddress')} placeholder="123 rue de la rue"
                           className="form-control"></input>
                </div>

                <div className="form-group">
                    <label>Ville de l'activité</label>
                    <input onChange={handelChange('activityCity')} className="form-control"></input>
                </div>

                <div className="form-group">
                    <label>Code Postal de l'activité</label>
                    <input onChange={handelChange('activityZip')} className="form-control"></input>
                </div>

                <div className="form-group">
                    <label><strong>Responsable de l'activité </strong></label><br/>
                    <label>Nom </label>
                    <input type="text" onChange={handelChange('activityResponsibleName')} id="inputTitle"
                           className="form-control" placeholder="Reponsible Name"
                           required/><br/>
                    <label>Email </label>
                    <input type="email" onChange={handelChange('activityResponsibleEmail')} id="inputEmail"
                           className="form-control" placeholder="Reponsible Email"
                           required/><br/>
                    <label>Numero de téléphone </label>
                    <input type="tel" onChange={handelChange('activityResponsiblePhone')} id="inputPhone"
                           className="form-control" placeholder="Reponsible Phone"
                           required/><br/>

                </div>

                <p>Type de l'activité </p>
                <div className="form-check form-check-inline">
                    <label className="checkboxLabel">
                        Sportive
                        <input
                            name="sportive"
                            type="checkbox"
                            onChange={handelChange('activityTypeSportive')}/>
                    </label>
                    <label>
                        Culturelle
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