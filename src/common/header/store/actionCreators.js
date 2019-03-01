
import * as constant from './constant'


export let searchFocus = () => ({
    type: constant.SEARCH_FOCUS,
    focused:true
})

export let searchBlur = () => ({
    type: constant.SEARCH_BLUR,
    focused:false
})

export let mouseEnter=()=>({
    type: constant.MOUSE_ENTER,
})
export let mouseLeave=()=>({
    type: constant.MOUSE_LEAVE,
})


export let getHotList=()=>({
    type: constant.GET_HOT_LIST,

})
