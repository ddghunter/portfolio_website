// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';
// React Redux import
import { connect } from 'react-redux';

// My Component imports
import CodingProject from './containers/codingProject';

// Material UI Styles
//import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';


const CodingProjects = ({ dimensions, projects = [] }) => {

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
    <Grid
      container
      direction = "column"
      justify = "flex-start"
      alignItems = "stretch"
    >
      { renderProjects() }
    </Grid>
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