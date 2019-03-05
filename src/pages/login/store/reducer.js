import * as  constant from './constant'

import { fromJS } from 'immutable'


let defaultState = fromJS({
	login:false
})
export default (state = defaultState, action) => {



	switch (action.type) {


		default:
			return state;

	}


}