// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';


// My Component imports


// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  projectCardSubtitlePackagesText: {

  },
  projectCardSubtitlePackagesGrid: {

  },
}));

const SPLITTER = " - ";


const CodingProjectSubtitlePackages = ({ packages }) => {
  const classes = useStyles();

  const Text = ({ children }) => {
    const classes = useStyles();
  
    return(
      <Typography
        variant = "subtitle1"
        className={classes.projectCardSubtitlePackagesText}
      >
        { children }
      </Typography>
    );
  };

  return(
    <Grid
      container
      direction = "row"
      justify = "flex-start"
      alignItems = "center"
      className = {classes.projectCardSubtitlePackagesGrid}
    >

    </Grid>
  );
}

CodingProjectSubtitlePackages.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};


export default CodingProjectSubtitlePackages;