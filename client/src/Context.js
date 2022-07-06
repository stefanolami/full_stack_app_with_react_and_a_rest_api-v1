import React, { Component } from 'react';
import Methods from './ApiMethods';

export const Context = React.createContext();

export class Provider extends Component {

    constructor() {
        super();
        this.apiMethods = new Methods();
        this.state= {
            authenticatedUser: null,
            urlParams: "/",
            validationErrors: [],
            newUser: {
                firstName: '',
                lastName: '',
                emailAddress: '',
                password: ''
            }
        }
    }

    signIn = async (username, password) => {
        const user = await this.apiMethods.getUser(username, password);
        if (user !== null) {
            this.setState(() => {
                return {
                    authenticatedUser: user
                }
            })
        } else {
            console.log('Username not found')
        }
        return user;
    }

    signUp = async (user) => {
        const newUser = await this.apiMethods.createUser(user);
        if (newUser === true) {
            this.signIn(user.emailAddress, user.password)
        }
        return newUser
    }

    signOut = () => {
        this.setState(() => {
            return {
                authenticatedUser: null
            }
        })
    }

    getCourse = async (id) => {
        const course = await this.apiMethods.getCourse(id);
        if (course == null) {
            console.log('Course not found')
        }
        return course;
    }

    getCourses = async () => {
        const courses = await this.apiMethods.getCourses();
        if (courses.length === 0) {
            console.log('Course not found')
        }
        return courses;
    }

    createCourse = async (course) => {
        return await this.apiMethods.createCourse(course);
    }

    updateCourse = async (id, course, username, password) => {
        return await this.apiMethods.updateCourse(id, course, username, password);
    }

    newUserChange = (name, value) => {
        this.setState(() => {
            return {
                newUser: {
                    [name]: value
                }
            }
        })
    }

    setUrlParams = (params) => {
        this.setState(() => {
            return {
                urlParams: params
            }
        })
    }

    render() {

        const value = {
            authenticatedUser: this.state.authenticatedUser,
            newUser: this.state.newUser,
            urlParams: this.state.urlParams,
            validationErrors: this.state.validationErrors,
            actions: {
                signIn: this.signIn,
                signUp: this.signUp,
                signOut: this.signOut,
                getCourse: this.getCourse,
                getCourses: this.getCourses,
                createCourse: this.createCourse,
                updateCourse: this.updateCourse,
                newUserChange: this.newUserChange,
                setUrlParams: this.setUrlParams
            }
        }

        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}