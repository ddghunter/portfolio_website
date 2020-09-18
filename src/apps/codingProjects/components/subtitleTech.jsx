// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';


// My Component imports


// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  projectCardSubtitleTechText: {

  },
  projectCardSubtitleTechGrid: {

  },
}));


const Text = ({ children, ...props }) => {
  const classes = useStyles();

  return(
    <Typography
      noWrap
      display = "inline"
      variant = "subtitle2"
      className={classes.projectCardSubtitleTechText}
      {...props}
    >
      { children }
    </Typography>
  );
};

const Splitter = () => {
  
  return(
    <Text>
      { " - " }
    </Text>
  );
};


const CodingProjectSubtitleTechnologies = ({
  expanded = false,
  projectNumber,
  technologies = [],
  selectedTech,
  setSelectedTech,
}) => {
  const classes = useStyles();
  const result = [];
  
  const orderedTech = [...technologies];
  orderedTech.sort((firstEl, secondEl) => { return firstEl.order - secondEl.order });
  orderedTech.forEach((tech, index) => {
    if(index > 0){
      result.push(<Splitter key={`coding-project-tech-${index}`}/>);
    }
    result.push(
      <Text key={`coding-project-${projectNumber}-tech-${index}`}>
        { tech.name }
      </Text>
    );
  });

  return result;
}

CodingProjectSubtitleTechnologies.propTypes = {
  expanded: PropTypes.bool,
  projectNumber: PropTypes.number.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  selectedTech: PropTypes.number.isRequired,
  setSelectedTech: PropTypes.func.isRequired,
};


export default CodingProjectSubtitleTechnologies;