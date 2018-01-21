import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (history) => {
  const initialState = {};
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    applyMiddleware(routerMiddleware(history), thunk),
  );

  return store;
};

export default configureStore;
