// React import
import React, { lazy, Suspense } from 'react';
// React Router imports
import { Redirect } from 'react-router-dom';

// My Component imports
import AboutMe from '../apps/aboutMe/main';
import CodingProjects from '../apps/codingProjects/main';

// Material UI Component imports
import CircularProgress from '@material-ui/core/CircularProgress';

// My Project imports
// NOTE: Use lazy imports for code splitting purposes so
//       that modules don't get loaded until necessary
const RecipeBrowser = lazy(() => import('../projects/recipeBrowser/main'));


//////////////////////////////////////////////////////////
// OUTSIDE URLS
//////////////////////////////////////////////////////////

export const STORAGE_URL = "https://ddghunter-portfolio.appspot.com/";

//////////////////////////////////////////////////////////
// LOCAL URLS
//////////////////////////////////////////////////////////

export const HOME = '/';
export const LOGIN = '/login';
export const ABOUT_ME = '/';
export const PROJECTS = '/projects';
//export const RESUME = '/resume';
export const RECIPES = '/projects/recipe_browser'

//////////////////////////////////////////////////////////
// STRING TO VALID URL
//////////////////////////////////////////////////////////

export const nameToUrl = (name) => {
  return name.replace(/\s/g, "_")
             .replace(/@/g, "at")
             .replace(/&/g, "and")
             .replace(/%/g, "percent")
             .replace(/[^-.~_\s@&%[A-z0-9]/gi, "")
             .toLowerCase();
};

//////////////////////////////////////////////////////////
// NAVIGATION BUTTONS
//////////////////////////////////////////////////////////

export const ROUTES = [
  {
    label: "About Me",
    path: ABOUT_ME,
    exact: true,
    componentFunc: (props) => (
      <Redirect to={RECIPES} {...props}/>
    ),
    props: {},
  },
  {
    label: "Projects",
    path: PROJECTS,
    exact: true,
    componentFunc: (props) => (
      <CodingProjects {...props}/>
    ),
    props: {},
  },
  {
    path: RECIPES,
    componentFunc: (props) => (
      <Suspense fallback={<CircularProgress/>}>
          <RecipeBrowser {...props}/>
        </Suspense>
    ),
    props: {},
  },
];

const generateNavButtons = () => {
  const result = [];
  ROUTES.forEach((route) => {
    if(route.label){
      result.push({
        label: route.label,
        path: route.path
      });
    }
  });
  return result;
};

const generateRouterInfo = () => {
  return ROUTES.map((route) => {
    const {label, ...routeInfo} = route;
    return {...routeInfo};
  });
};

export const NAVIGATION_BUTTONS = generateNavButtons();
export const ROUTER_INFO = generateRouterInfo();