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
  projectBackground: {
    height: "100%",
    width: "100%",
    //paddingLeft: "10%",
    //paddingRight: "10%",
    overflow: "auto",
    //overflowY: "hidden",
  },
  projectWrapperGrid: {
    height: "100%",
  },
  projectItem: {
    flexGrow: 8,
  },
  projectLeftItem: {
    flexGrow: 1,
  },
  projectRightItem: {
    flexGrow: 1,
  },
}));

/*
const ProjectWrapper = ({ children }) => {
  const classes = useStyles();
    
  return(
    <Paper
      className={classes.projectBackground}
    >
      { children }
    </Paper>
  );
};
*/
const ProjectWrapper = ({ children }) => {
  const classes = useStyles();
    
  return(
    <Grid
      container
      direction = "row"
      justify = "flex-start"
      alignItems = "stretch"
      className = {classes.projectWrapperGrid}
    >
      <Grid item className={classes.projectRightItem}>

      </Grid>
      <Grid item className={classes.projectItem}>
        <Paper
          elevation = {0}
          className = {classes.projectBackground}
        >
          { children }
        </Paper>
      </Grid>
      <Grid item className={classes.projectLeftItem}>
        
      </Grid>
    </Grid>
  );
};

ProjectWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};


export default ProjectWrapper;