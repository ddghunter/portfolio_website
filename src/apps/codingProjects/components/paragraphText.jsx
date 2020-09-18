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
  projectCardParagraph: {

  },
}));


const CodingProjectParagraphText = ({ text }) => {
  const classes = useStyles();


  return(
    <Typography
      variant = "subtitle1"
      className={classes.projectCardParagraph}
    >
      { text }
    </Typography>
  );
};

CodingProjectParagraphText.propTypes = {
  text: PropTypes.string.isRequired,
};


export default CodingProjectParagraphText;