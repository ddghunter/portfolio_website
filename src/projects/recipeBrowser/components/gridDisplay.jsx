// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';

// My Component imports
import SmoothImg from '../../../core/components/smoothImg';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  recipeGridDisplayCard: {
    width: 300
  },
  recipeNameGrid:{

  },
}));

const MAX_WIDTH = 400;
const MIN_WIDTH = 300;


const RecipeGridDisplay = ({ dimensions, recipe=null }) => {
  const classes = useStyles();

    
  const renderRecipeImage = () => {
    if(recipe !== null){
      return(
        <SmoothImg
          dimensions = {{height: 300, width: 300}}
          src = {recipe.image}
          alt = {recipe.name}
        />
      );
    }
    else{
      return(
        <CircularProgress
          size = {60}
          thickness = {4}
        />
      )
    }
  };

  return(
    <Card className={classes.recipeGridDisplayCard}>
      <CardActionArea>
        { renderRecipeImage() }
        <Typography
          variant = "h5"
          className = {classes.recipeNameGrid}
        >
          { recipe === null 
            ?
            "Loading..."
            :
            recipe.name
          }
        </Typography>
      </CardActionArea>
    </Card>
  );
};

RecipeGridDisplay.propTypes = {
  dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
  recipe: PropTypes.object,// (recipe === null) => displayLoadingState
};


export default RecipeGridDisplay;