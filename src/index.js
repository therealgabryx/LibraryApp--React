import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

// Component Libraries 
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';

import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'

const store = createStore(rootReducer);

ReactDOM.render( 
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}> 
      <Provider store={store}>
        <App /> 
      </Provider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root') 
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
