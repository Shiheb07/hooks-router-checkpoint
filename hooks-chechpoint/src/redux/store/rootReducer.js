import { combineReducers } from "redux";
import { movieReducer } from "../reducer/movieReducer";
import { productReducer } from "../reducer/productReducer";
export const rootReducer = combineReducers({
    movies : movieReducer,
    products : productReducer,
})