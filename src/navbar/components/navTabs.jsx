// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';
// React Router imports
import { useHistory } from "react-router-dom";

// My Component imports

// My Path imports
import { NAVIGATION_BUTTONS } from '../../core/paths';

// Material UI Styles
//import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const NavigationTabs = ({ dimensions }) => {
  const history = useHistory();
  
  const tabOnClick = (path) => (event) => {
    if(history.location.pathname !== path){
      history.push(path);
    }
  };

  const generateTabs = () => {
    return NAVIGATION_BUTTONS.map((buttonInfo, index) => {
      return(
        <Grid item key={`nav-tab-${index}`}>
          <Button onClick={tabOnClick(buttonInfo.path)}>
            { buttonInfo.label }
          </Button>
        </Grid>
      );
    });
  };
  
  return(
    <Grid
      container
      direction = "row"
      justify = "flex-end"
      alignItems = "center"
    >
      { generateTabs() }
    </Grid>
  )
};

NavigationTabs.propTypes = {
  dimensions: PropTypes.object,
};


export default NavigationTabs;