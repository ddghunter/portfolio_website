// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';

// My Component imports
import AppRouter from './appRouter';
import NavBar from '../../navbar/main';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  mainBackground: {
    height: "100%",
    width: "100%",
    //overflow: "hidden",
  },
  mainGrid: {
    height: "100%",
  },
  appBackground: {
    height: "100%",
    width: "50%",
    paddingLeft: "25%",
    paddingRight: "25%",
    overflow: "auto",
    //overflowY: "hidden",
  },
  mainGridNavItem: {
    
  },
  mainGridAppItem: {
    flexGrow: 1,
    overflow: "auto",
  },
}));


const MainGrid = ({ dimensions }) => {
  const classes = useStyles();


  return(
    <Paper square className={classes.mainBackground}>
      <Grid
        container
        direction = "column"
        justify = "flex-start"
        alignItems = "stretch"
        wrap = {"nowrap"}
        className = {classes.mainGrid}
      >
        <Grid item className={classes.mainGridNavItem}>
          <NavBar
            dimensions = {dimensions}
          />
        </Grid>
        <Grid item className={classes.mainGridAppItem}>
          <AppRouter dimensions={dimensions}/>
        </Grid>
      </Grid>
    </Paper>
  );
};

MainGrid.propTypes = {
  dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
};


export default MainGrid;
