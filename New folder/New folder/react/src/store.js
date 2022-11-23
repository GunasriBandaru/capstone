import { createStore, applyMiddleware,compose,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import appReducer from './redux/appReducer';
import { persistStore } from 'redux-persist';

const middleware = [thunk];

const composeEnhancers =window._REDUX_DEVTOOL_EXTENSION_COMPOSE_ || compose;

// const rootReducer = combineReducers({loginReducer: loginReducer, appReducer: appReducer})
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export  {store,persistor};
