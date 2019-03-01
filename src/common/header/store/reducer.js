

import { constant } from './publicExport'
import { fromJS } from 'immutable'


let defaultState = fromJS({
    focused: false,
    mouseIn:false,
    page:1,
    totalPage:1,
    hotList:[]
})
export default (state = defaultState, action) => {



    switch(action.type){
        case  constant.SEARCH_FOCUS:
        return state.set("focused",action.focused);

        case  constant.SEARCH_BLUR:
        return state.set("focused",action.focused);
        
        case  constant.MOUSE_ENTER:
        return state.set("mouseIn",true);

        case  constant.MOUSE_LEAVE:
        return state.set("mouseIn",false);

        case constant.GET_HOT_LIST_SUCCEEDED:
        return state.set("hotList",action.hotList).set("totalPage",action.totalPage);
        case  constant.CHANGE_PAGE:
        return state.set("page",action.page);


        default :
        return state;

    }

 


    
 
}