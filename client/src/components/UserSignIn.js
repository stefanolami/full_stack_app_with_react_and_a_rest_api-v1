import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserSignIn = (props) => {

    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        props.context.actions.signIn(emailAddress, password)
            .then( user => {
                if (user === null) {
                    console.log('Sign-in was unsuccessful');
                } else {
                    navigate(props.context.urlParams);
                }
                })
            .catch(err => {
                console.log(err);
            })
    }
   
    return (
        <React.Fragment>
            <div className="form--centered">
                <h2>Sign In</h2>
                <form onSubmit={submit}>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" onChange={(e) => setEmailAddress(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="button" type="submit">Sign In</button>
                    <Link to="/"><button className="button button-secondary">Cancel</button></Link>
                </form>
            </div>
        </React.Fragment>
    )
}

export default UserSignIn;