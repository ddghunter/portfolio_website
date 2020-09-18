// Redux Saga
import { all } from 'redux-saga/effects';
// My imports
import watchPortfolioAsync from './portfolio';
import watchRecipesAsync from './recipes';
//import watchUserAsync from './user';


export default function* rootSaga() {
  yield all([
    watchPortfolioAsync(),
    watchRecipesAsync(),
    //watchUserAsync(),
  ]);
};