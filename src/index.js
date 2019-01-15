import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';
import {addCharacterById} from './actions/index';



const store = createStore(rootReducer);



console.log('store.getState()', store.getState())
store.subscribe(()=> console.log('store', store.getState()));



ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));






