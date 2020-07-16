import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_redux';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export const middlewareUsed = [thunkMiddleware, loggerMiddleware];

export const createStoreWithMiddleware = applyMiddleware(...middlewareUsed)(createStore);

export const createTestStore = (initialState) => createStoreWithMiddleware(rootReducer, initialState);
