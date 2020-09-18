// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Redux-Related imports
import { Provider } from 'react-redux'
import store from './core/store';

// React Router import
import { BrowserRouter } from 'react-router-dom';

// React Cookies import
//import { CookiesProvider } from 'react-cookie';

// Material UI imports
import { ThemeProvider } from '@material-ui/styles';
import theme from './core/theme';


// Default imports
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
