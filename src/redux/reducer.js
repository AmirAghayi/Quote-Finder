const initialState = {
   user: ''  
};


//action type
const UPDATE_USER = "UPDATE_USER";


//reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, {user: action.payload})

            default:
               return state;
    }
}

//action builders
export function setUser (user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}




export default reducer;