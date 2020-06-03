import React, {useState} from "react";
import axios from "axios";


const EmailForm = ({id, title}) => {

    const [info, setInfo] = useState({
        email: "",
        message: "",
        id,
        title

    });
    const handelChange = name => event => {
        setInfo({...info, [name]: event.target.value})
    };

    const handleSubmit = (event) => {
        //event.preventDefault();

        console.log(info) ;
        const url = `http://localhost:4000/api/admin/askToFollowActivity`;

        axios.post(url, { ...info})
            .then(({data}) => {
                const {message} = data;
                console.log(message)
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={handelChange('email')} id="inputTitle" className="form-control"
                           placeholder="Start with a title"
                           required/><br/>
                </div>
                <div className="form-group">
                    <label>Message textarea</label>
                    <textarea onChange={handelChange('message')} className="form-control"
                              rows="3"></textarea>
                </div>
                <button className="btn btn-primary inpPublier" type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default EmailForm;


