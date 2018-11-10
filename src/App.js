import React, { Component } from 'react';
import './App.css';
import { filter, orderBy } from 'lodash';
import Pagination from './components/paginations/Pagination';
import SearchInput from './components/TextInputs/SearchInput';
import Th from './components/Headers/Th-component';
import { connect } from 'react-redux';
import { contains } from './utils/helperFunctions';
import Loading from './components/Loading';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullData: [],
			data: [],
			isLoading: true,
			errors: null,
			sortOrder: null
		};
	}
	_onSearch = e => {
		//converting user int put to lowerCase
		const query = e.target.value.toLocaleLowerCase();
		const results = filter(this.state.fullData, launch => {
			return contains(launch['mission_name'], query);
		});
		this.setState({
			data: [...results]
		});
	};
	_sortBy = key => {
		const data = orderBy(this.state.data, [key], 'asc');
		this.setState({
			data
		});
	};
	render() {
		if (this.state.isLoading) {
			return <Loading />;
		}
		return (
			<div className="container-fluid app">
				<div className="card">
					<div className="card-body">
						<div className="col-md-12">
							<h2 className="pt-3 pb-4 text-center title">
								The Last 20 SpaceX Launches
							</h2>
							<SearchInput onChange={e => this._onSearch(e)} />
						</div>
					</div>
					<table className="table table-striped">
						<thead>
							<tr>
								<Th title="#" />
								<Th
									title="Flight &#8470;"
									sortable
									onClick={() => this._sortBy('flight_number')}
								/>
								<Th
									title="Mission Name"
									sortable
									onClick={() => this._sortBy('mission_name')}
								/>
								<Th title="Rocket Name" />
								<th>Date</th>
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
