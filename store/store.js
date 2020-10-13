import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers/rootReducer";

const bindMiddleware = (middleware) => {
    return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
        return rootReducer(state, action)
}

const logger = createLogger();

const initStore = () => {
    return createStore(reducer, composeWithDevTools(bindMiddleware([thunkMiddleware,logger])));
}


export const wrapper = createWrapper(initStore);