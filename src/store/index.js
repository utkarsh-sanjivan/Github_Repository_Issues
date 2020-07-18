import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from "redux-saga";
import sagas from './sagas';
import createRootReducers from './reducers';

export const buildStore = ( history, initialState = {} ) => {
	const sagaMiddleware = createSagaMiddleware(initialState = {});
 	const routeMiddleware = routerMiddleware(history);
 	
 	const store = createStore(
   		createRootReducers(history),
   		initialState,
   		compose( 
    		applyMiddleware(sagaMiddleware, routeMiddleware)
   		)
 	);

 	sagaMiddleware.run(sagas);
 	return store;
}