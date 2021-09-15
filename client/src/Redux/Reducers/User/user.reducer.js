import { CLEAR_USER, GET_USER, SELF } from "./user.type";

const INITIAL_STATE = {
    user: {}
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
            }

        case SELF:
            return {
                ...state,
                user: action.payload
            };

        case CLEAR_USER:
            return {}

        default:
            return {
                ...state
            }
    }
}

export default userReducer;