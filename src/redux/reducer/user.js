import * as type from "../action/types";

export default (state = [], action) => {
    switch (action.type) {
        case type.FETCH_USERS:
            return action.payload;
        default:
            console.log("ZERO STATE");
            return state;
    }
};