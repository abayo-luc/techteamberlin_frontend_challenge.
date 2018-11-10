// https://api.spacexdata.com/v3/launches/past?sort=launch_date_utc&&order=desc&&limit=20
import axios from 'axios';
import {
	QUERY_LAUNCHES,
	QUERY_LAUCNHES_SUCESS,
	QUERY_LAUNCHES_FAILED
} from './type';

export const queryLaunches = () => {
	return dispatch => {
		dispatch({ type: QUERY_LAUNCHES });
		console.log('querying');
	};
};
