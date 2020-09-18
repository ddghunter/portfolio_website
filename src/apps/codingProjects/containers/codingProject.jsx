// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';


// My Component imports
import CardHeader from './header';
import Summary from '../components/summary';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const MARGIN = 5;
const CARD_CONTENT_PADDING = 16;

const useStyles = makeStyles(theme => ({
  projectCard: {
    height: "100%",
    width: "100%",
    minHeight: 50,
    minWidth: 200,
    //maxHeight: 250,
    marginBottom: MARGIN,
    marginTop: MARGIN,
    backgroundColor: "#7d7f80",
  },
  projectCardContent:{
    padding: CARD_CONTENT_PADDING,
    paddingRight: (CARD_CONTENT_PADDING)/2,
    "&:last-child": {
      paddingBottom: CARD_CONTENT_PADDING,
    },
  },
}));


const CodingProject = ({
  dimensions,
  project,
  first = false,
  last = false
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const generateStyles = React.useCallback(() => {
    var result = {};
    if(first){
      result.marginTop = MARGIN * 2;
    }
    else if(last){
      result.marginBottom = MARGIN * 2;
    }
    return result;
  }, [first, last]);

  return(
    <Card
      className = {classes.projectCard}
      style = {generateStyles()}
    >
      <CardContent className={classes.projectCardContent}>
        <CardHeader
          expanded = {expanded}
          setExpanded = {setExpanded}
          name = {project.name}
          number = {project.order}
          technologies = {project.technologies}
        />
        { expanded && 
          <Summary
            projectNumber = {project.order}
            summary = {project.summary}
          />
        }
      </CardContent>
    </Card>
  );
};

CodingProject.propTypes = {
  dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
  project: PropTypes.object.isRequired,
  first: PropTypes.bool,
  last: PropTypes.bool,
};


export default CodingProject;