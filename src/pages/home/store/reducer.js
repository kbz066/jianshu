import * as  constant from './constant'

import { fromJS } from 'immutable'


let defaultState = fromJS({
	topicList: [],
	articleList: [],

	recommendList: []
})
export default (state = defaultState, action) => {



	switch (action.type) {

		case constant.GET_HOME_DATASUCCEEDED:

		return state.merge({
			topicList: fromJS(action.topicList),
			articleList: fromJS(action.articleList),
		
			recommendList:fromJS(action.recommendList)
		})
		default:
			return state;

	}


}