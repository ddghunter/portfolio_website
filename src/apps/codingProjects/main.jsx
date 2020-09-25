// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';
// React Redux import
import { connect } from 'react-redux';

// My Component imports
import CodingProject from './containers/codingProject';

// My Image import
import backgroundImage from '../../core/images/background.jpg';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  background: {
    height: "100%",
    overflow: "auto",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));


const CodingProjects = ({ dimensions, projects = [] }) => {
  const classes = useStyles();

  const generateStyles = React.useCallback(() => {
    var result = {};
    if(dimensions.width < 900){
      if(dimensions.width < 500){
        result["width"] = "70%";
        result["paddingLeft"] = "15%";
        result["paddingRight"] = "15%";
      }
      else{
        result["width"] = "60%";
        result["paddingLeft"] = "20%";
        result["paddingRight"] = "20%";
      }
    }
    else{
      result["width"] = "50%";
      result["paddingLeft"] = "25%";
      result["paddingRight"] = "25%";
    }
    return result;
  }, [dimensions]);

  const renderProjects = React.useCallback(() => {
    let props;
    const maxIndex = projects.length - 1;
    return projects.map((project, index) =>{
      props = {dimensions, project};
      if(index === 0){
        props.first = true;
      }
      else if(index === maxIndex){
        props.last = true;
      }
      return(
        <Grid item key={`coding-project-item-${index}`}>
          <CodingProject {...props}/>
        </Grid>
      );
    });
  }, [dimensions, projects]);
  
  return(
    <Paper
      className = {classes.background}
      style = {generateStyles()}
    >
      <Grid
        container
        direction = "column"
        justify = "flex-start"
        alignItems = "stretch"
      >
        { renderProjects() }
      </Grid>
    </Paper>
  );
};

CodingProjects.propTypes = {
  dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
  projects: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};


const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CodingProjects);