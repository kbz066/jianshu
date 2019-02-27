

let defaultState={
    focused:false,
}
export default (state=defaultState,action)=>{

    if(action.type==="search_focus"){
        let newState=JSON.parse(JSON.stringify(state));
        newState.focused=action.focused;
        return newState;
    }

    if(action.type==="search_blur"){
        let newState=JSON.parse(JSON.stringify(state));
        newState.focused=action.focused;
        return newState;
    }
    return state;
}