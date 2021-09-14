import { combineReducers } from "redux";

import restaurant from "./Restaurant/restaurant.reducer";
import image from "./Image/image.reducer";
import review from "./Reviews/review.reducer";
import user from "./User/user.reducer";
import food from "./Food/food.reducer";
import auth from "./Auth/auth.reducer"

const rootReducer = combineReducers({ restaurant, image, review, user, food, auth });

export default rootReducer;