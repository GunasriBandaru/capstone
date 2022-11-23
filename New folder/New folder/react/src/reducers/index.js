import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from '../redux/cart.reducer';
import auth from "./auth";
import message from "./message";

const persistConfig = {
  key: 'quoality-guest',
  storage,
  whitelist: ['cart'],
};

const appReducer = combineReducers({
  cart: cartReducer,
  auth,
  message,
  //app
});
export default persistReducer(
  persistConfig, 
  appReducer
);
