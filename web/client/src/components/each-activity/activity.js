import React, {useEffect, useState} from 'react';
import NewsSidebar from '../news-sidebar';
import Email from '../email-form';
import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";
import axios from "axios";

const Activity = ({id}) => {
    const [info, setInfo] = useState({
        email: "",
        message: "",
        showEmail: false
    });
    const changeEmailStatus = () => setInfo({ ...info, showEmail: !info.showEmail })
    useEffect(() => {
        //console.log(id)
        axios.get('http://localhost:4000/api/admin/getActivity/' + id)
            .then((data) => {
                //console.log(data.data.result)
                setInfo(data.data.result)
            })
            .catch(error => console.log(error))
    }, [])


    const handelChange = name => event => {
        setInfo({...info, [name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = `http://localhost:4000/api/admin/askToFollowActivity`;

        axios.post(url, { ...info})
            .then(({data}) => {
                const {message} = data;
                console.log(message)
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="container">
            <h2 className="sectionTitle">News</h2>
            <div>
                <img
                    alt=""
                    src={aboutUsLogo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                />
                <h3>{info.title}</h3>
                <h6>{info.date}</h6>
                <h6>{info.activityType}</h6>
                <p>{info.description}</p>

                <br/> <br/>
                <button onClick={changeEmailStatus}>s'inscrire</button>
                { info.showEmail ? <Email/> : null  }

                <div className="infoPratique">
                    <div>
                        <h4>Infos pratiques</h4>
                        <p>2 rue du Stade</p>
                        <p>Pôle culturel</p>
                        <p>67410 Drusenheim</p>
                    </div>
                    <div>
                        <h4>Horaires :</h4>
                        <h5><u>Ouverture du Pôle Culturel / Billetterie</u></h5>
                        <p>Mardi de 14h à 19h</p>
                        <p>Mercredi de 10h à 12h et de 14h à 19h</p>
                        <p>Jeudi de 14h à 18h</p>
                        <p>Vendredi de 14h à 19h</p>
                        <p>Samedi de 9h30 à 12h30</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ActivityPage = ({match}) => {

    return <Activity id={match.params.id}/>
}


export default ActivityPage;