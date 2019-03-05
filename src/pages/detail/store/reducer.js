import * as  constant from './constant'

import { fromJS } from 'immutable'
import React from 'react'



let defaultState = fromJS({
	title:"",
	content:"",

})
export default (state = defaultState, action) => {



	switch (action.type) {


		case constant.GET_DETAIL_DATA_SUCCEEDED:

		return state.set("title",action.title).set("content",action.content)


		default:
			return state;

	}






}