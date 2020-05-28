import React from "react";


const EmailForm = (props) => {
    return (
        <div>
            <form >
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" id="inputTitle" className="form-control"
                           placeholder="Start with a title"
                           required/><br/>
                </div>
                <div className="form-group">
                    <label>Message textarea</label>
                    <textarea className="form-control"
                              rows="3"></textarea>
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default EmailForm;


