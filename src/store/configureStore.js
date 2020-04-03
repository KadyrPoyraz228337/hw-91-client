import {createBrowserHistory} from "history";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import usersReducer from "./reducers/usersReducer";
import {loadFromLocalStorage, localStorageMiddleware} from "./localStorage";
import chatReducer from "./reducers/chatReducer";


export const history = createBrowserHistory();

const rootReduser = combineReducers({
  router: connectRouter(history),
  users: usersReducer,
  chat: chatReducer
});

const middlewares = [
  thunk,
  routerMiddleware(history),
  localStorageMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const persistedState = loadFromLocalStorage();

export const store = createStore(rootReduser, persistedState, enhancers);