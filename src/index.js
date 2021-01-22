import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MuiThemeProvider as NewMuiThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from './config/theme';

//redux
import { Provider } from 'react-redux';
import store from 'redux/createStore';

ReactDOM.render(
  <Provider store={store}>
    <NewMuiThemeProvider theme={darkTheme}>
      <App />
    </NewMuiThemeProvider>
    <ToastContainer autoClose={4000} position="top-right" />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
