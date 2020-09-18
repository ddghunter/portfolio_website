// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';

// My Component imports
import Subtitle from './subtitle';
import Title from '../components/title';
import ToggleButton from '../components/toggleButton';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  projectHeaderGrid: {
    
  },
  projectHeaderTextGrid: {

  },
  projectHeaderButtonGrid: {
    height: "100%",
    width: "100%",
  },
}));

const BOTTOM_MARGIN = 12;


const CodingProjectHeader = ({
  expanded = false,
  setExpanded,
  name,
  number, 
  technologies,
}) => {
  const classes = useStyles();

  const generateStyles = React.useCallback(() => {
    const result = {};
    if(expanded){
      result.marginBottom = BOTTOM_MARGIN;
    }
    return result;
  }, [expanded]);

  
  return(
    <Grid
      container
      direction = "row"
      justify = "space-between"
      alignItems = "stretch"
      wrap = "nowrap"
      className = {classes.projectHeaderGrid}
      style = {generateStyles()}
    >
      <Grid item>
        <Grid
          container
          direction = "column"
          justify = "space-around"
          alignItems = "stretch"
          className = {classes.projectHeaderTextGrid}
        >
          <Grid item>
            <Title name={name}/>
          </Grid>
          <Grid item>
            <Subtitle
              expanded = {expanded}
              number = {number}
              technologies = {technologies}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction = "column"
          justify = {"flex-start"}
          alignItems = "flex-end"
          className = {classes.projectHeaderButtonGrid}
        >
          <Grid item>
            <ToggleButton expanded={expanded} setExpanded={setExpanded}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

CodingProjectHeader.propTypes = {
  expanded: PropTypes.bool,
  setExpanded: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default CodingProjectHeader;