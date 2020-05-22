import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";
import { Link } from 'react-router-dom';

const Activities = () => {
    const [ info, setInfo ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/api/admin/getActivities')
            .then((data) => {
                //console.log(data.data.result)
                setInfo(data.data.result)
            })
            .catch(error => console.log(error))
    }, [])


    let activities =  info.map((e, i) => {
        return (
            <div className="container" key={i}>
                <Link to={'/item/'+e._id}>

                    <div>
                        <img
                            alt=""
                            src={aboutUsLogo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                        />
                        <h3>{e.title}</h3>
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
            {activities}
        </Fragment>
    )

}

const ActivityPage = () => {

    return <Activities />

}

export default ActivityPage;