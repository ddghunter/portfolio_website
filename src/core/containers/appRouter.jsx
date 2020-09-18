// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';
// React Router imports
import { Route, Switch } from 'react-router-dom';

// My Component imports


// My Path imports
import { ROUTER_INFO } from '../paths';


const AppRouter = ({ dimensions }) => {

  return(
    <Switch>
      {
        ROUTER_INFO.map((route, index) => {
          const {componentFunc, props, ...routeProps} = route;
          const componentProps = {...props, dimensions};
          return(
            <Route {...routeProps} key={`app-route-${index}`}>
              { componentFunc(componentProps) }
            </Route>
          );
        })
      }
    </Switch>
  );
};

AppRouter.propTypes = {
  dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
};


export default AppRouter;
