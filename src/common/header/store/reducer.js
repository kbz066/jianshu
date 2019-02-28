

import {constant} from './publicExport'



let defaultState={
    focused:false,
}
export default (state=defaultState,action)=>{

    if(action.type===constant.SEARCH_FOCUS){
        let newState=JSON.parse(JSON.stringify(state));
        newState.focused=action.focused;
        return newState;
    }

    if(action.type===constant.SEARCH_BLUR){
        let newState=JSON.parse(JSON.stringify(state));
        newState.focused=action.focused;
        return newState;
    }
    return state;
}