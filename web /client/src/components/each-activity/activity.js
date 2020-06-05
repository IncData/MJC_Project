import React, {useEffect, useState} from 'react';
import NewsSidebar from '../news-sidebar';
import Email from '../email-form';
import './index.css';
import aboutUsLogo from "../../logo/mjc_about_us.png";
import axios from "axios";

const Activity = ({id}) => {
    const [info, setInfo] = useState({
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

    return (
        <div className="container">
            <h2 className="sectionTitle">Nouvelles</h2>
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

                <button className="btn btn-success" onClick={changeEmailStatus}>s'inscrire</button>
                { info.showEmail ?
                    <Email
                        title={info.title}
                        id={info._id}
                    />
                    : null  }
            </div>
        </div>
    )
}

const ActivityPage = ({match}) => {  //haskaca Dav   es hookeri xndric er ha eli ban ka Tat  che Dav jan, apres Xndrem))

    return <Activity id={match.params.id}/>
}


export default ActivityPage;