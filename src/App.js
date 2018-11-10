import React, { Component } from 'react';
import './App.css';
import { filter } from 'lodash';
import Pagination from './components/paginations/Pagination';
import SearchInput from './components/TextInputs/SearchInput';
import { connect } from 'react-redux';
import { contains } from './utils/helperFunctions';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullData: [],
			data: [],
			isLoading: true,
			errors: null
		};
	}
	_onSearch = e => {
		const query = e.target.value;
		const results = filter(this.state.fullData, launch => {
			return contains(launch['mission_name'], query);
		});
		this.setState({
			data: [...results]
		});
	};
	render() {
		console.log('state', this.state);
		if (this.state.isLoading) {
			return <p>Loading....</p>;
		}
		return (
			<div className="container-fluid app">
				<div className="card mb-4">
					<div className="card-body">
						<div className="col-md-12">
							<h2 className="pt-3 pb-4 text-center font-bold font-up title">
								The Last 20 SpaceX Launches
							</h2>
							<SearchInput onChange={e => this._onSearch(e)} />
						</div>
					</div>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>Flight &#8470;</th>
								<th>Mission Name</th>
								<th>Rocket Name</th>
								<th>Data</th>
							</tr>
						</thead>
						<tbody>
							{this.state.data.map((launch, key) => {
								return (
									<tr key={key}>
										<th scope="row">
											{key + 1}
										</th>
										<td>
											{launch['flight_number']}
										</td>
										<td>
											{launch['mission_name']}
										</td>
										<td>
											{launch.rocket['rocket_name']}
										</td>
										<td>
											{new Date(launch['launch_date_utc']).toDateString()}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<Pagination />
				</div>
			</div>
		);
	}
	componentWillReceiveProps(nextProps) {
		const { isLoading, errors, launches } = nextProps;
		this.setState({
			isLoading,
			errors,
			data: [...launches],
			fullData: [...launches]
		});
	}
}
const mapStateToProps = state => {
	const { isLoading, launches, errors } = state.launches;
	return {
		isLoading,
		launches,
		errors
	};
};
export default connect(mapStateToProps, {})(App);
