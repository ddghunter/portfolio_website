// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  
}));


const RecipeNavigation = ({ props }) => {
  const classes = useStyles();
    
  return(
    <Grid
      container
      
    >
      <Grid item>
        Recipe Browser  
      </Grid>
    </Grid>
  );
};

RecipeNavigation.propTypes = {
  
};


export default RecipeNavigation;