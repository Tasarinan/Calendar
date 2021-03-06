import {createStore, applyMiddleware} from 'redux';
import {middlewareCloseNotification} from "../notification/middleware";
import {rootReducer} from './index';

const store = createStore(rootReducer, applyMiddleware(
    middlewareCloseNotification
));

window.store = store;

export default store;