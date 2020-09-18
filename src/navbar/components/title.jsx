// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';
// React Redux import
import { connect } from 'react-redux';

// My Component imports


// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  mainTitleText: {
    fontFamily: "Rambla",

  },
}));


const Title = ({ dimensions, name, short = false }) => {
  const classes = useStyles();

  const Text = ({ children }) => {
    return(
      <Typography
        variant = "h3"
        className = {classes.mainTitleText}
      >
        { children }
      </Typography>
    );
  };

  const makePossessive = (name) => {
    if(name.endsWith("s")){
      return name + "'";
    }
    else{
      return name + "'s";
    }
  };

  const generateLongName = React.useCallback((possessive=false) => {
    var thisName = "", result = "";
    if(name.nickname){
      thisName = name.nickname;
    }
    else if(name.first){
      thisName = name.first;
    }

    if(thisName){
      if(name.last){
        result = thisName + " " + name.last;
      }
      else{
        //console.error("generateLongName - Name improperly formatted. Needed: name.last");
        result = thisName;
      }
    }
    else{
      //console.error("generateLongName - Name improperly formatted. Needed: name.first or name.nickname");
      result = thisName;
    }
    
    if(possessive && result){
      result = makePossessive(result);
    }
    
    return result;
  }, [name]);

  const generateLongNameArray = React.useCallback((possessive=false) => {
    const result = [];
    var firstName = "";

    if(name.nickname){
      firstName = name.nickname;
    }
    else if(name.first){
      firstName = name.first;
    }
    else{
      //console.error("generateShortName - Name improperly formatted. Needed: name.first or name.nickname");
    }

    if(name.last){
      if(firstName){
        result.push(firstName);
      }
      if(possessive){
        if(name.last.endsWith("s")){
          result.push(name.last + "'");
        }
        else{
          result.push(name.last + "'s");
        }
      }
      else{
        result.push(name.last);
      }
    }
    else{
      //console.error("generateShortName - Name improperly formatted. Needed: name.last");
      if(firstName){
        if(possessive){
          result.push(makePossessive(firstName));
        }
        else{
          result.push(firstName);
        }
      }
    }

    return result;
  }, [name]);
  
  if(short){
    return(
      <Grid
        container
        direction = "column"
        justify = "space-around"
        alignItems = "center"
      >

      </Grid>
    );
  }
  else{
    return(
      <Text>
        { generateLongName(true) } Portfolio
      </Text>
    );
  }
};

Title.propTypes = {
  dimensions: PropTypes.object,
  name: PropTypes.objectOf(PropTypes.string).isRequired,
  short: PropTypes.bool,
};


const mapStateToProps = (state) => {
  return {
    name: state.bio.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Title);