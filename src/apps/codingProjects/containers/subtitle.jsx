// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';


// My Component imports
import Packages from '../components/subtitlePackages';
import Technologies from '../components/subtitleTech';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  projectCardSubtitleGrid: {

  },
}));



const CodingProjectSubtitle = ({ expanded = false, number, technologies }) => {
  const classes = useStyles();
  const [selectedTech, setSelectedTech] = React.useState(0);

  React.useEffect(() => {
    let tech;
    for(var x=0; x<technologies.length; x++){
      tech = technologies[x];
      if(tech.packages){
        setSelectedTech(x);
        break;
      }
    }
  }, [technologies]);

  const generatePackages = React.useCallback(() => {
    const tech = technologies[selectedTech];
    if(tech.packages && Array.isArray(tech.packages)){
      return [...tech.packages];
    }
    else{
      return [];
    }
  }, [technologies, selectedTech]);

  
  if(expanded){
    return(
      <Grid
        container
        direction = "column"
        justify = "space-around"
        alignItems = "stretch"
        className = {classes.projectCardSubtitleGrid}
      >
        <Grid item>
          <Technologies
            expanded = {expanded}
            projectNumber = {number}
            technologies={technologies}
            selectedTech = {selectedTech}
            setSelectedTech = {setSelectedTech}
          />
        </Grid>
        <Grid item>
          <Packages packages={generatePackages()}/>
        </Grid>
      </Grid>
    );
  }
  else{
    return(
      <Technologies
        expanded = {expanded}
        projectNumber = {number}
        technologies = {technologies}
        selectedTech = {selectedTech}
        setSelectedTech = {setSelectedTech}
      />
    );
  }
}

CodingProjectSubtitle.propTypes = {
  expanded: PropTypes.bool,
  number: PropTypes.number.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};


export default CodingProjectSubtitle;