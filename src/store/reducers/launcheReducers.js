import {
	QUERY_LAUNCHES,
	QUERY_LAUCNHES_SUCESS,
	QUERY_LAUNCHES_FAILED
} from '../actions/type';

const INITIAL_STATE = {
	launches: {},
	isLoading: true
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case QUERY_LAUNCHES: {
			return {
				...state,
				isLoading: true
			};
		}
		default:
			return state;
	}
};
