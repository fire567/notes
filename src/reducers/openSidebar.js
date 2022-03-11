export default (state = true, action) => {
    if(action.type === "IS_SIDEBAR_OPEN"){
        return action.payload;
    }

    return state;
}