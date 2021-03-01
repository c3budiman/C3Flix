import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
// import { createLogger } from 'redux-logger';
import rootReducer from './reducers/all'; 

const store = createStore(rootReducer, {}, applyMiddleware(
  promise,
  // createLogger({ collapsed: true }),
));

export default store;