import {
	QUERY_LAUNCHES,
	QUERY_LAUCNHES_SUCESS,
	QUERY_LAUNCHES_FAILED,
	CHANGE_ITEM_PER_PAGE
} from '../actions/type';

const INITIAL_STATE = {
	launches: [],
	isLoading: true,
	errors: null,
	perPage: 5
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case QUERY_LAUNCHES: {
			return {
				...state,
				isLoading: true
			};
		}
		case QUERY_LAUCNHES_SUCESS: {
			return {
				...state,
				launches: [...action.payload],
				isLoading: false,
				errors: null
			};
		}
		case QUERY_LAUNCHES_FAILED: {
			return {
				...state,
				isLoading: false,
				errors: action.payload
			};
		}
		case CHANGE_ITEM_PER_PAGE: {
			return {
				...state,
				perPage: action.payload
			};
		}
		default:
			return state;
	}
};
