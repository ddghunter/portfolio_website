// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  appBackground: {
    height: "100%",
    width: "50%",
    paddingLeft: "25%",
    paddingRight: "25%",
    overflow: "auto",
    //overflowY: "hidden",
  },
}));


const AppWrapper = ({ children }) => {
  const classes = useStyles();
    
  return(
    <Paper
      className={classes.appBackground}
    >
      { children }
    </Paper>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};


export default AppWrapper;
