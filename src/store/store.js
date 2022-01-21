import { applyMiddleware, createStore } from 'redux';
import { composeEnhancers, middleware, sagaMiddleware } from './middleware';
import { rootSaga } from './rootSaga';
import { rootReducer } from '../modules/index';
// import { authReducer } from '../modules/auth/reducer'

const store = () => {
  const mainStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);
  return mainStore;
};
console.log(rootReducer)

export default store;
