//////////////////////////////////////////////////////////
// State
//////////////////////////////////////////////////////////

const defaultState = {
  education: null,
  workExperience: null,
};


//////////////////////////////////////////////////////////
// Saga Actions
//////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////
// Saga Action Creators
//////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////
// Reducer Actions
//////////////////////////////////////////////////////////

const UPDATE = 'resume/reducers/UPDATE';

//////////////////////////////////////////////////////////
// Reducer Action Creators
//////////////////////////////////////////////////////////

export const update = (payload) => {
  return {
    type: UPDATE,
    payload,
  };
}

//////////////////////////////////////////////////////////
// Reducer
//////////////////////////////////////////////////////////

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;