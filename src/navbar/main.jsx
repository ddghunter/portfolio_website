// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';

// My Component imports
import Tabs from './components/navTabs';
import Title from './components/title';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  navBarBackground: {
    padding: 10,
  },
  navBarGrid: {

  },
  navBarTitleItem: {
    flexGrow: 1,
  },
  navBarTabsItem: {
    flexGrow: 1,
  },
}));


const NavBar = ({ dimensions }) => {
  const classes = useStyles();

  return(
    <Paper square className={classes.navBarBackground}>
      <Grid
        container
        direction = "row"
        justify = "space-between"
        alignItems = "center"
        className={classes.navBarGrid}
      >
        <Grid item className={classes.navBarTitleItem}>
          <Title dimensions={dimensions}/>
        </Grid>
        <Grid item className={classes.navBarTabsItem}>
          <Tabs dimensions={dimensions}/>
        </Grid>
      </Grid>
    </Paper>
  );
};

NavBar.propTypes = {
  dimensions: PropTypes.object,
};


export default NavBar;
