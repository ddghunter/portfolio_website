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
  projectSummaryText: {

  },
}));


const CodingProjectSummary = ({ expanded=false, projectNumber, summary }) => {
  const classes = useStyles();
  
  const lastParagraph = summary.length - 1;
  return summary.map((paragraph, index) => {
    var variableProps = {};
    if(index < lastParagraph){
      variableProps.paragraph = true;
    }
    return(
      <Typography
        variant = "body2"
        key = {`coding-project-${projectNumber}-summary-paragraph-${index}`}
        className = {classes.projectSummaryText}
        {...variableProps}
      >
        { paragraph }
      </Typography>
    );
  });
};

CodingProjectSummary.propTypes = {
  expanded: PropTypes.bool,
  projectNumber: PropTypes.number.isRequired,
  summary: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default CodingProjectSummary;