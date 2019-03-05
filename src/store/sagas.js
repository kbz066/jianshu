import { takeLatest, put ,call} from 'redux-saga/effects'
import { constant } from '../common/header/store/publicExport'
import axios from 'axios'
import { List } from 'immutable'
import * as homeConstant  from '../pages/home/store/constant'
import * as detailonstant  from '../pages/detail/store/constant'



function* getHotList(action) {
    let res = yield  axios.get("./api/getHotList.json")

    yield put({
        type:constant.GET_HOT_LIST_SUCCEEDED,
        hotList:res.data,
        totalPage:Math.ceil(res.data.length/10)
        
    })


}


function* getHomeData(){
    let res = yield  axios.get("./api/getHomeData.json")


    yield put({
        type:homeConstant.GET_HOME_DATASUCCEEDED,
        topicList: res.data.data.topicList,
        articleList: res.data.data.articleList,
        recommendList: res.data.data.recommendList
    })

}

function* getDetailData(){
    let res = yield  axios.get("./api/detail.json")


    yield put({
        type:detailonstant.GET_DETAIL_DATA_SUCCEEDED,
        title:res.data.data.title,
        content:res.data.data.content,
    })

}

function* mySaga() {
    yield takeLatest(constant.GET_HOT_LIST, getHotList);
    yield takeLatest(homeConstant.GET_HOME_DATA,getHomeData)
    yield takeLatest(detailonstant.GET_DETAIL_DATA,getDetailData)


}

export default mySaga;