import React, { Component } from 'react';
import Methods from './ApiMethods';

export const Context = React.createContext();

export class Provider extends Component {

    constructor() {
        super();
        this.apiMethods = new Methods();
        this.state= {
            authenticatedUser: null
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

    signOut = () => {
        this.setState(() => {
            return {
                authUser: null
            }
        })
    }

    render() {

        const value = {
            authUser: this.state.authenticatedUser,
            actions: {
                signIn: this.signIn,
                signOut: this.signOut
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