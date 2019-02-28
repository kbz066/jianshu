

import { constant } from './publicExport'
import { fromJS } from 'immutable'


let defaultState = fromJS({
    focused: false,
})
export default (state = defaultState, action) => {

    if (action.type === constant.SEARCH_FOCUS) {
        

        return state.set("focused",action.focused);
    }

    if (action.type === constant.SEARCH_BLUR) {
        return state.set("focused",action.focused);
    }
    return state;
}