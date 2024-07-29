import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./authReducer";
import {
  itemListReducer,
  itemDetailsReducer,
  itemCreateReducer,
  itemUpdateReducer,
  itemDeleteReducer,
} from "./itemReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  itemList: itemListReducer,
  itemDetails: itemDetailsReducer,
  itemCreate: itemCreateReducer,
  itemUpdate: itemUpdateReducer,
  itemDelete: itemDeleteReducer,
});

export default rootReducer;
