import { compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const isBrowser = process.browser;
const devtools =
  isBrowser && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;
const middleware = [sagaMiddleware];

export { composeEnhancers, middleware, sagaMiddleware };
