// https://api.spacexdata.com/v3/launches?launch_year=2018&&sort=launch_date_utc&&order=desc&&limit=20
import axios from 'axios';
import {
	QUERY_LAUNCHES,
	QUERY_LAUCNHES_SUCESS,
	QUERY_LAUNCHES_FAILED
} from './type';

export const queryLaunches = () => {
	return dispatch => {
		dispatch({ type: QUERY_LAUNCHES });
		axios
			.get(
				'https://api.spacexdata.com/v3/launches?launch_year=2018&&sort=launch_date_utc&&order=desc&&limit=20'
			)
			.then(res => {
				const { data } = res;
				dispatch({ type: QUERY_LAUCNHES_SUCESS, payload: data });
			})
			.catch(err => {
				const { data } = err.response;
				dispatch({ type: QUERY_LAUNCHES_FAILED, payload: data });
			});
	};
};
