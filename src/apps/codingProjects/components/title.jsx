// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';


// My Component imports


// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  projectCardTitle: {
    marginBottom: 6,
    
  },
}));


const CodingProjectTitle = ({ name }) => {
  const classes = useStyles();


  return(
    <Typography
      variant = "h5"
      className={classes.projectCardTitle}
    >
      { name }
    </Typography>
  );
};

CodingProjectTitle.propTypes = {
  name: PropTypes.string.isRequired,
};


export default CodingProjectTitle;