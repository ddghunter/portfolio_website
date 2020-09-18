// Redux import
import { combineReducers } from 'redux';

// My App Reducer imports
import bioReducer from './bio';
import projectsReducer from './projects';
import resumeReducer from './resume';

// My Project Reducer imports
import recipesReducer from './recipes';


export default combineReducers({
  bio: bioReducer,
  projects: projectsReducer,
  recipes: recipesReducer,
  resume: resumeReducer,
});