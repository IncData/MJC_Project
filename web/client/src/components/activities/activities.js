import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap'

const Activities = () => {
    const [ info, setInfo ] = useState({
        activities : [],
        selectedOption: null,
    });

    useEffect(() => {
        axios.get('http://localhost:4000/api/admin/getActivities/none-type')
            .then((data) => {
                //console.log(data.data.result)
                setInfo({...info, activities : [...data.data.result]})
            })
            .catch(error => console.log(error))
    }, [])

    const selectType = (event) => {
        const activityType = event.target.value;
        setInfo({...info, selectedOption: event.target.value})

        axios.get('http://localhost:4000/api/admin/getActivities/'+activityType) // chunem senc url,
            .then((data) => {
                //console.log(data.data.result)
                setInfo({...info, activities : [...data.data.result]})
            })
            .catch(error => console.log(error))

    }

    let activities =  info.activities.map((e, i) => {
        return (
            <div className="container" key={i}>
                <Link to={'/item/'+e._id}>
                    <div>
                        <h4>{e.title}</h4>
                        <img
                            alt=""
                            src={aboutUsLogo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />
                        <h6>{e.date}</h6>
                        <h6>{e.activityType}</h6>
                        <p>{e.description}</p>
                    </div>
                </Link>
            </div>
        )
    })

    return(
        <Fragment>
            <h2 className="sectionTitle">Activities</h2>
            <div>
                <Form.Control as="select" custom className="inp" onChange={selectType}>
                    <option value="All">Toutes les activités</option>
                    <option value="Sportive">Activités Sportives</option>
                    <option value="Cultural">Activités Culturelles</option>
                </Form.Control>
            </div>
            {activities}
        </Fragment>
    )

}

const ActivitiesPage = () => {

    return <Activities />

}

export default ActivitiesPage;