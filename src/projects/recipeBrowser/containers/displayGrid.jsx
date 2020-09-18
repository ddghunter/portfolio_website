// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';

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

  const renderRecipes = React.useCallback(() => {
    
    const GridItem = React.forwardRef(({ children, ...props }, ref) => {
      return(
        <Grid
          item
          ref = {ref}
          className={classes.recipeItem}
          {...props}
        >
          { children }
        </Grid>
      );
    });
    
    let result = [], ref;
    const numRecipes = recipes.length;
    if(placeholders && numRecipes < placeholders){
      for(var x=0; x<placeholders; x++){
        ref = React.createRef();
        if(x < numRecipes){
          result.push(
            <GridItem ref={ref}>

            </GridItem>
          );
        }
        else{
          result.push(
            <GridItem ref={ref}>

            </GridItem>
          );
        }
      }
    }
    else{
      result = recipes.map((recipe) => {
        ref = React.createRef();
        return(
          <GridItem ref={ref}>

          </GridItem>
        );
      });
    }
    return result;
  }, [placeholders, recipes, classes.recipeItem]);
  
  console.log("Recipes:", recipes)
  return(
    <Grid
      container
      direction = "row"
      justify = "flex-start"
      className = {classes.recipeDisplayGrid}
    >
      { renderRecipes() }
    </Grid>
  );
};

RecipeDisplayGrid.propTypes = {
  dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
  placeholders: PropTypes.number,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default RecipeDisplayGrid;