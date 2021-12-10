import { compose } from "redux";
import { authMiddleware } from "../auth/authMiddleware";

const isBrowser = process.browser;
const devtools = isBrowser && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;
const middleware = [authMiddleware];

export { composeEnhancers, middleware }