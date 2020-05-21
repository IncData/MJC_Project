import React, { useState } from 'react';
import axios from 'axios';
import './index.css';


const User = () => {

    const [info , setInfo] = useState({
        activityTitle: "",
        activityDescription: "",
        activityResponsibleName : "",
        activityResponsibleEmail : "",

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
        //     <div class="sidebarr">
        //     <a class="active" href="#home">Home</a>
        //     <a href="/admin/createUser">Create User</a>
        //     <a href="/admin/createActivity">CreateActivity</a>
        //     <a href="#about">About</a>
        //   </div>

        <form class ="form-signin "onSubmit={handleSubmit}>
            <div className="container">
                <div className="text-center mb-4">
                    {/*<img className="mb-4" src="Logo MJC à mettre" alt width="72" height="72"/>*/}
                    <h1 className="h3 mb-3 font-weight-normal"> MJC Strasbourg/Petite France</h1>
                    <p>
                        Hey Admin! Do your stuff here to create users! Impossible is nothing!
                    </p>
                </div>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" onChange={handelChange('activityTitle')} id="inputUserName" className="form-control" placeholder="Start with a user name"
                           required/><br/>
                </div>
                <div class="form-label-group">
                    <label for="inputEmail">Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/><br/>

                </div>

                <div class="form-label-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>

                </div>
                <br/>
                <div class="form-label-group">
                    <label for="inputPassword">Password Confirmation</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password Confirmation" required/>

                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Create User</button>
                <p className="mt-5 mb-3 text-muted text-center">© MJC Strasbourg 2020</p>

            </div>
        </form>


    )

}


const CreateUser = () => {

    return <User />

}
export default CreateUser;