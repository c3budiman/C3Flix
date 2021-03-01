import { combineReducers } from "redux";
import dogReducer from "./dogReducer";
import omdbReducer from "./omdbReducer";
import searchOmdb from "./searchOmdb";
import omdbDetail from "./omdbDetail";

//this thing combine reducers, so we dont have that messy one file.
export default combineReducers({ omdbReducer,dogReducer,searchOmdb,omdbDetail });
