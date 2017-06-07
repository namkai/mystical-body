import * as type from '../constants/actionTypes';

export default function (state = {}, action) {
	switch (action.type) {
		case type.ADD_USER_DATA:
			return action.payload;
		default:
			return state;
	}
}