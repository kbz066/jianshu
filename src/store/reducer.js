import {combineReducers} from 'redux-immutable'

import headerReducen from '../common/header/store/reducer'


export default combineReducers({
    header:headerReducen
});