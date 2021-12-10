import { applyMiddleware, createStore } from 'redux';
import { composeEnhancers, middleware } from './middleware';
import { rootReducer } from './rootReducer';

const store = () => {
  const mainStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
  return mainStore;
};

export default store;
