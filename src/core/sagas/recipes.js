// Redux Saga
import { all, call, put, takeLatest } from 'redux-saga/effects';

// My Actions imports
import * as actions from '../ducks/recipes';

// My API import
import apiCall from '../api/recipes';

// My Firebase imports
import { fireStore } from '../firebase';


const PATHS = {
  filter: "filter.php",
  get: "lookup.php",
  list: "list.php",
  random: "random.php",
  search: "search.php",
};

const DELAY_TIME = 250;
const ID_KEY = "idMeal";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const findMealID = (meal) => {
  return meal[ID_KEY];
};

const formatMealData = (data) => {

  const findIngredientByOrder = (index) => (ingredient) => {
    return ingredient.order === index;
  };

  var result = {}, ingredients=[];
  let newKey, index, newValue, indexStr, fill;
  for(var [key, value] of Object.entries(data)){
    fill = true;
    if(key.startsWith("str")){
      newKey = key.charAt(3).toLowerCase() + key.substring(4);
      newValue = value;
      if(newKey.startsWith("ingredient")){
        fill = false;
        indexStr = newKey.replace("ingredient", "");
        index = parseInt(indexStr);
        if(Number.isNaN(index)){
          console.error("Ingredient has no index in key")
        }
        else if(value){
          if(ingredients.length > 0){
            const ingredientIndex = ingredients.findIndex(findIngredientByOrder(index));
            if(ingredientIndex > -1){
              ingredients[ingredientIndex].name = value;
            }
            else{
              ingredients.push({name: value, order: index});
            }
          }
          else{
            ingredients.push({name: value, order: index});
          }
        }
      }
      else if(newKey.startsWith("measure")){
        fill = false;
        indexStr = newKey.replace("measure", "");
        index = parseInt(indexStr);
        if(Number.isNaN(index)){
          console.error("Ingredient has no index in key")
        }
        else if(value){
          if(ingredients.length > 0){
            const ingredientIndex = ingredients.findIndex(findIngredientByOrder(index));
            if(ingredientIndex > -1){
              ingredients[ingredientIndex].measure = value;
            }
            else{
              ingredients.push({measure: value, order: index});
            }
          }
          else{
            ingredients.push({measure: value, order: index});
          }
        }
      }
      else if(newKey === "meal"){
        newKey = "name";
      }
      else if(newKey === "mealThumb"){
        newKey = "image";
      }
      else if(newKey === "tags"){
        if(value){
          newValue = [...value.split(",")];
        }
        else{
          newValue = [];
        }
      }
      if(fill){
        result[newKey] = newValue;
      }
    }
    else if(key === ID_KEY){
      result['id'] = value;
    }
    else{
      result[key] = value;
    }
  }
  result.ingredients = [...ingredients];
  return result;
};


function* get_random_recipe() {
  const {error=null, ...result} = yield apiCall(PATHS.random);
  if(error !== null){
    return {error}
  }
  return result.meals[0];
};

function* get_random_recipes(action) {
  const result = [];
  let indexMax = 10;
  if(action.payload.number){
    indexMax = action.payload.number;
  }
  var index = 0, failures=0, pushRecipe=true; 
  while(index < indexMax){
    const {error=null, ...recipe} = yield call(get_random_recipe);
    if(error === null){
      pushRecipe = true;
      if(result.length > 0 && result.some((existing) => findMealID(recipe) === findMealID(existing))){
        pushRecipe = false;
      }
      if(pushRecipe){
        result.push(formatMealData(recipe));
        yield put(actions.update({landingPage: [...result]}));
        index++;
      }
    }
    else{
      failures++;
      console.error("Could only generate", index + "/" + action.payload.number, "random recipes");
      if(failures >= 3){
        break;
      }
    }
    yield delay(DELAY_TIME);
  }
};

function* list_recipe_filters() {
  const QUERIES = {
    categories: "c=list",
    areas: "a=list",
    ingredients: "i=list",
  };

  const keyMapping = (key, list) => {
    let singularKey = "";
    if(key === "categories"){
      singularKey = key.substring(0, key.length-3) + "y";
    }
    else{
      singularKey = key.substring(0, key.length-1);
    }
    const objKey = "str" + key.charAt(0).toUpperCase() + singularKey.substring(1);
    return list.map((item, index) => {
      return item[objKey];
    });
  };

  var result = {};
  for(var [key, value] of Object.entries(QUERIES)){
    const {error=null, ...queryResult} = yield apiCall(PATHS.list, value);
    if(error === null){
      result[key] = keyMapping(key, queryResult.meals);
    }
    else{
      console.error("Could not get list of", key.charAt(0).toUpperCase() + key.substring(1));
    }
  }
  yield put(actions.update({...result}));
};


export default function* watchPortfolioAsync() {
  yield all([
    takeLatest(actions.LIST_FILTERS, list_recipe_filters),
    takeLatest(actions.RANDOM_RECIPES, get_random_recipes),
  ]);
};
