// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';
// React Redux import
import { connect } from 'react-redux';

// My Component imports


// Material UI Styles
//import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';


const AboutMe = ({ dimensions, bio }) => {

  return(
    <Grid
      container
    >

    </Grid>
  )
};

AboutMe.propTypes = {
  dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
  bio: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
  return {
    bio: state.bio,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);