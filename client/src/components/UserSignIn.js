import React, { Component } from 'react';

export default class UserSignIn extends Component {
    state = {

    };

    render() {
        return (
            <React.Fragment>
                <h1>signinCourses</h1>
                <button onClick={this.props.context.actions.signIn}>Sign In</button>
            </React.Fragment> 
        )
    }
}