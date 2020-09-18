// React import
import React from 'react';
// PropTypes import
import PropTypes from 'proptypes';
// React Redux import
import { connect } from 'react-redux';

// My Component imports
import DisplayGrid from './containers/displayGrid';
import NavBar from './containers/navigation';

// My Ducks imports
import {
  clear,
  generate_random_recipes,
  list_filters,
} from '../../core/ducks/recipes';

// Material UI Styles
import { makeStyles } from '@material-ui/styles';
// Material UI Component imports
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  recipeBrowserGrid: {

  },
  recipeBrowserDisplayItem:{
    flexGrow: 1,
  },
}));

const NUM_RANDOM_RECIPES = 10;


const RecipeBrowser = ({
  dimensions,
  recipes,
  landingPage,
  ingredients,
  filters,
  clearState,
  getFilters,
  getRandomRecipes,
}) => {
  const classes = useStyles();
  const [areaFilter, setAreaFilter] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("");
  const [letterFilter, setLetterFilter] = React.useState("");
  const [search, setSearch] = React.useState("");

  // Component Did Mount...
  React.useEffect(() => {
    // Populate necessary information for start-up
    getFilters();
    getRandomRecipes(NUM_RANDOM_RECIPES);
    return () => {
      // Clear Redux State on close
      clearState();
    }
  }, [clearState, getFilters, getRandomRecipes]);

  const searchOnChange = React.useCallback((event) => {
    const firstChar = event.target.value.charAt(0).toLowerCase();
    if(letterFilter === "" || letterFilter !== firstChar){
      setLetterFilter(firstChar);
    }
    setSearch(event.target.value);
  }, [letterFilter]);


  const generateDisplayProps = React.useCallback(() => {
    const props = {};
    if(!areaFilter && !categoryFilter && !letterFilter){
      props.recipes = landingPage;
      props.placeholders = NUM_RANDOM_RECIPES;
    }
    else{
      props.recipes = [];
    }
    return props;
  }, [areaFilter, categoryFilter, letterFilter, landingPage, recipes]);

  //console.log("Landing Page:", landingPage);
  //console.log("Filters:", filters);
  return(
    <Grid
      container
      direction = "column"
      justify = "flex-start"
      alignItems = "stretch"
      className = {classes.recipeBrowserGrid}
    >
      <Grid item>
        <NavBar />
      </Grid>
      <Grid item className={classes.recipeBrowserDisplayItem}>
        <DisplayGrid
          dimensions = {dimensions}
          {...generateDisplayProps()}
        />
      </Grid>
    </Grid>
  );
};

RecipeBrowser.propTypes = {
  dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
  recipes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  landingPage: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  clearState: PropTypes.func.isRequired,
  getFilters: PropTypes.func.isRequired,
  getRandomRecipes: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  return {
    ingredients: state.recipes.ingredients,
    filters: {
      categories: state.recipes.categories,
      areas: state.recipes.areas,
    },
    landingPage: state.recipes.landingPage,
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearState: () => { dispatch(clear()) },
    getFilters: () => { dispatch(list_filters()) },
    getRandomRecipes: (number=NUM_RANDOM_RECIPES) => { dispatch(generate_random_recipes(number)) },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RecipeBrowser);