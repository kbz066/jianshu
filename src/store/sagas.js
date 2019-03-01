import { takeLatest, put ,call} from 'redux-saga/effects'
import { constant } from '../common/header/store/publicExport'
import axios from 'axios'
import { List } from 'immutable';




function* getHotList(action) {
    let res = yield  axios.get("./api/getHotList.json")
    console.log(res.data instanceof List)
    yield put({
        type:constant.GET_HOT_LIST_SUCCEEDED,
        hotList:res.data,
        totalPage:Math.ceil(res.data.length/10)
        
    })


}


function* mySaga() {
    yield takeLatest(constant.GET_HOT_LIST, getHotList);

}

export default mySaga;