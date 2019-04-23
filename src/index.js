import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
// import { PulseLoader } from 'react-spinners';


import AppRouter from './routers/AppRouter';

import {startLoggedUser }from './actions/userActions';
import {startLoadTests} from './actions/testActions';


// import 'normalize.css/normalize.css';
import './styles/styles.scss';




import 'babel-polyfill';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faArrowCircleDown, faArrowCircleUp  } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faArrowCircleDown, faArrowCircleUp);

const store = configureStore();


document.documentElement.setAttribute('data-browser', navigator.userAgent);


//VYRESIT OBRAZKY DO PUBLIC,  PRENOS COOKIES A NA ZAVER PRENEST NA HASHROUTER

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

console.log('process.env je:',process.env)


// ReactDOM.render(<p>LOADING</p>, document.getElementById('app'))


//startLogedUser and startLoadTests have custom callbacks -> after successfull    

store.dispatch(startLoggedUser(() => {
    // store.dispatch(startLoadTests(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
}));
// }));






//  ReactDOM.render(jsx, document.getElementById("app"));