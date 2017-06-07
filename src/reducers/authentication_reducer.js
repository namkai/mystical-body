import * as type from '../constants/actionTypes';

export default function(state=false, action) {
	switch(action.type) {
		case type.AUTHENTICATE:
			return action.payload
		default:
			return state;
	}
}