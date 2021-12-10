import { compose } from "redux";

const isBrowser = process.browser;
const devtools = isBrowser && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;
const middleware = [];

export { composeEnhancers, middleware }