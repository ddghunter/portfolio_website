// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';

// My Component imports
import RecipeDisplay from '../components/gridDisplay';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  recipeDisplayGrid: {
    height: "100%",
  },
  recipeItem: {
    
  },
}));


const RecipeDisplayGrid = ({ 
  dimensions,
  placeholders = 0,
  recipes = [],
}) => {
  const classes = useStyles();
  var displayList = [];
  const numRecipes = recipes.length;
  if(numRecipes < placeholders){
    for(var x=0; x<placeholders; x++){
      if(x < numRecipes){
        displayList.push(recipes[x]);
      }
      else{
        displayList.push(null);
      }
    }
  }
  else{
    displayList = [...recipes];
  }
    
  console.log("Recipes:", recipes);
  return(
    <Grid
      container
      direction = "row"
      justify = "space-evenly"
      alignItems = "center"
      className = {classes.recipeDisplayGrid}
    >
      { displayList.map((recipe, index) => {
          let keyStr;
          if(recipe !== null){
            keyStr = "recipe-" + recipe.id;
          }
          else{
            keyStr = "recipe-loading-" + index;
          }
          return(
            <Grid item key={keyStr + "-grid-item"}>
              <RecipeDisplay
                dimensions = {dimensions}
                recipe = {recipe}
              /> 
            </Grid>
          );
        }) 
      }
    </Grid>
  );
};

RecipeDisplayGrid.propTypes = {
  dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
  placeholders: PropTypes.number,
  recipes: PropTypes.arrayOf(PropTypes.object),
};


export default RecipeDisplayGrid;