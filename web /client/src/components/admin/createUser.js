import React, { useState } from 'react';
import axios from 'axios';
import './index.css';


const User = () => {

    const [info , setInfo] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        password2: "",
        userTypeUser:false,
        userTypeAdmin:false

    })

    const handelChange = name => event => {
        if(name === 'userTypeUser') {
            setInfo({...info,  userTypeUser: !info.userTypeUser})
        } else if(name === 'userTypeAdmin') {
            setInfo({...info,  userTypeAdmin: !info.userTypeAdmin})
        } else {
            setInfo({...info,  [name]: event.target.value })
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("24");
        const url = `http://localhost:4000/api/admin/createuser`;
        console.log(info, 'info');
        axios.post(url, info)
            .then(({data}) => {
                const { status, message } = data;
                //console.log(data);
                if(status){
                    console.log(status)
                    //setMessage(message)
                }
            })
            .catch(error => console.log(error));   
    }

    return (
        <form className ="form-signin "onSubmit={handleSubmit}>
            <div className="container">
                <div className="text-center mb-4">
                    {/*<img className="mb-4" src="Logo MJC à mettre" alt width="72" height="72"/>*/}
                    <h1 className="h3 mb-3 font-weight-normal"> MJC Strasbourg/Petite France</h1>
                    <p>
                    Bonjour Admin, Vous pouvez créer des compte des utilisateurs par ici!
                    </p>
                </div>

                <div className="form-group">
                    <label>Prénom de l'utilisateur</label>
                    <input type="text" onChange={handelChange('name')} id="inputUserName" className="form-control" placeholder="Start with a user name"
                           required/><br/>
                </div>

                <div className="form-group">
                    <label>Nom de l'utilisateur</label>
                    <input type="text" onChange={handelChange('surname')} id="inputUserName" className="form-control" placeholder="Start with a user name"
                           required/><br/>
                </div>

                <div className="form-label-group">
                    <label >Email</label>
                    <input type="email" onChange={handelChange('email')} id="inputEmail" class="form-control" placeholder="Email address" required autofocus/><br/>

                </div>

                <div className="form-label-group">
                    <label >Mot de passe</label>
                    <input type="password" onChange={handelChange('password')} id="password" class="form-control" placeholder="Password" required/><br/>

                </div>

                <div className="form-label-group">
                    <label >Confirmation de mot de passe</label>
                    <input type="password" onChange={handelChange('password2')} id="password2" class="form-control" placeholder="Password Confirmation" required/><br/>

                </div>

                <p>Type d'utilisateur </p>
                <div className="form-check form-check-inline">
                    <label className="checkboxLabel">
                        Utilisateur
                        <input
                            name="user"
                            type="checkbox"
                            onChange={handelChange('userTypeUser')} />
                    </label>

                    <label>
                        Admin
                        <input
                            name="admin"
                            type="checkbox"
                            onChange={handelChange('userTypeAdmin')} />
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block inpPublier" type="submit">Create User</button>

            </div>
        </form>


    )

};


const CreateUser = () => {

    return <User />

}
export default CreateUser;