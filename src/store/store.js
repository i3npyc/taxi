import { applyMiddleware, createStore } from 'redux';
import { composeEnhancers, middleware, sagaMiddleware } from './middleware';
import { rootSaga } from './rootSaga';
import { rootReducer } from './rootReducer';

const store = () => {
  const mainStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);
  return mainStore;
};

export default store;
