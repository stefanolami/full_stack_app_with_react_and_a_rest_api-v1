import React, { useContext } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Context } from './Context';

/* const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Consumer>
        { context => (
          <Route
            {...rest}
            render={props => context.authenticatedUser ? (
              <Component {...props} />
            ) : (
              <Navigate to={{
                pathname: '/signin',
                state: { from: props.location }
              }} />
            )}
          />
        )}
      </Consumer>
    );
}; */

/* const PrivateRoute = ({ component: Component, ...rest }) => {
    const context = useContext(Context);
    return (
        <Route
        {...rest}
        render={props => context.authenticatedUser ? (
            <Component {...props} />
        ) : (
            <Navigate to={{
            pathname: '/signin',
            state: { from: props.location }
            }} />
        )}
        />
    );
}; */

const PrivateRoute = ({props}) => {
  const context = useContext(Context);
  const location = useLocation();
  return (
    context.authenticatedUser ? <Outlet /> : <Navigate to={'/signin'} state={{from: location}} replace />
  );
};

export default PrivateRoute;