// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';


// My Component imports


// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// Material UI Component imports
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  projectCardToggleButton: {

  },
}));


const CodingProjectToggle = ({ expanded, setExpanded }) => {
  const classes = useStyles();

  const onClick = React.useCallback((event) => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  return(
    <Button
      onClick = {onClick}
      className={classes.projectCardToggleButton}
    >
      { expanded
        ?
        <KeyboardArrowUpIcon />
        :
        <KeyboardArrowDownIcon /> 
      }
    </Button>
  );
};

CodingProjectToggle.propTypes = {
  expanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired,
};


export default CodingProjectToggle;