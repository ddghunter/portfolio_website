// React import
import React from 'react';
// React Router imports
import { Redirect } from 'react-router-dom';
// My Component imports
import AboutMe from '../apps/aboutMe/main';
import AppWrapper from '../core/components/appWrapper';
import CodingProjects from '../apps/codingProjects/main';
import ProjectWrapper from '../core/components/projectWrapper';
import RecipeBrowser from '../projects/recipeBrowser/main';
import Resume from '../apps/resume/main';


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
export const RESUME = '/resume';
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
      <Redirect to="/projects" {...props}/>
    ),
    props: {},
  },
  {
    label: "Projects",
    path: PROJECTS,
    exact: true,
    componentFunc: (props) => (
      <AppWrapper>
        <CodingProjects {...props}/>
      </AppWrapper>
    ),
    props: {},
  },
  {
    label: "Resume",
    path: RESUME,
    componentFunc: (props) => (
      <AppWrapper>
        <Resume {...props}/>
      </AppWrapper>
    ),
    props: {},
  },
  {
    path: RECIPES,
    componentFunc: (props) => (
      <ProjectWrapper>
        <RecipeBrowser {...props}/>
      </ProjectWrapper>
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