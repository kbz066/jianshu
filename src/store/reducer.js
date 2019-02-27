import {combineReducers} from 'redux'

import headerReducen from '../common/header/store/reducer'


export default combineReducers({
    header:headerReducen
});