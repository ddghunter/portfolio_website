// Redux Saga
import { all, put, takeLatest } from 'redux-saga/effects';

// My Actions imports
import * as bioActions from '../ducks/bio';
import * as projectActions from '../ducks/projects';

// My Firebase imports
import { fireStore } from '../firebase';


const COLLECTION_NAME = 'portfolio';
const BIO_DOCUMENT_KEY = 'aboutMe';


function* get_portfolio() {
  const collectionRef = fireStore.collection(COLLECTION_NAME);
  const projects = yield collectionRef.get();
  if(!projects.empty){
    const newProjects = [];
    var aboutMe = {};
    projects.forEach((project) => {
      if(project.id === BIO_DOCUMENT_KEY){
        aboutMe = {...project.data()};
      }
      else{
        newProjects.push({...project.data()});
      }
    });
    const orderedProjects = newProjects.sort((firstEl, secondEl) => {
      return firstEl.order - secondEl.order;
    });
    yield put(projectActions.update({projects: orderedProjects}));
    yield put(bioActions.update(aboutMe));
  }
  else{
    console.error("Projects not Found!")
  }
};


export default function* watchPortfolioAsync() {
  yield all([
    takeLatest(bioActions.GET_PORTFOLIO, get_portfolio),
  ]);
};