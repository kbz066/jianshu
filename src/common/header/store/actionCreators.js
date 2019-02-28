
import * as constant from './constant'


export let searchFocus = () => ({
    type: constant.SEARCH_FOCUS,
    focused:true
})

export let searchBlur = () => ({
    type: constant.SEARCH_BLUR,
    focused:false
})