import React, { Component } from 'react';

export default class CourseDetail extends Component {
    state = {

    };

    render() {
        const { authenticatedUser } = this.props.context;
        return (
            <h1>
                {
                    authenticatedUser ? 'yes' : 'no'
                }
            </h1>
        )
    }
}