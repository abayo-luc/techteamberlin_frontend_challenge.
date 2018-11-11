import React, { Component } from 'react';
import './App.css';
import { filter, orderBy } from 'lodash';
import Pagination from './components/paginations/Pagination';
import SearchInput from './components/TextInputs/SearchInput';
import Th from './components/Headers/Th-component';
import { connect } from 'react-redux';
import { contains, paginate } from './utils/helperFunctions';
import Loading from './components/Loading';
import SelectInput from './components/TextInputs/SelectInput';
import { changeItemsPerPage } from './store/actions/launcheActions';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullData: [],
			data: [],
			isLoading: true,
			errors: null,
			sortOrder: null,
			page: 0,
			perPage: 5
		};
	}
	_onSearch = e => {
		//converting user int put to lowerCase
		const query = e.target.value.toLocaleLowerCase();
		const results = filter(this.state.fullData, launch => {
			return contains(launch['mission_name'], query);
		});
		this.setState({
			data: [...paginate(results, this.state.perPage)],
			page: 0
		});
	};
	_sortBy = key => {
		const data = orderBy(this.state.fullData, [key], 'asc');
		this.setState({
			data: [...paginate(data, this.state.perPage)]
		});
	};
	_isActive = index => {
		if (index === this.state.page) {
			return 'active';
		}
	};
	render() {
		if (this.state.isLoading) {
			return <Loading />;
		}
		console.log(this.state.data.length);
		return (
			<div className="container-fluid app">
				<div className="card">
					<div className="card-body">
						<div className="col-md-12">
							<h2 className="pt-3 pb-4 text-center title">
								The Last 20 SpaceX Launches
							</h2>
							<div className="row">
								<div className="col-3">
									<SelectInput
										values={[5, 10, 20]}
										onChange={e =>
											this.props.changeItemsPerPage(
												parseInt(e.target.value, 10)
											)}
									/>
								</div>
								<div className="col-8">
									<SearchInput onChange={e => this._onSearch(e)} />
								</div>
							</div>
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
							{this.state.data.length === 0
								? <p>..</p>
								: this.state.data[this.state.page].map((launch, key) => {
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
					{this.state.data.length > 1 &&
						<Pagination
							goFirst={() =>
								this.setState({
									page: 0
								})}
							goLast={() =>
								this.setState(state => ({
									page: state.data.length - 1
								}))}
						>
							{this.state.data.map((item, index) => {
								return (
									<li
										className={`page-item ${this._isActive(index)}`}
										key={index}
										onClick={() => this.setState({ page: index })}
									>
										<p className="page-btn">
											{index + 1}
										</p>
									</li>
								);
							})}
						</Pagination>}
				</div>
			</div>
		);
	}
	componentWillReceiveProps(nextProps) {
		const { isLoading, errors, launches, perPage } = nextProps;
		console.log(paginate(launches, perPage));
		this.setState({
			isLoading,
			errors,
			perPage,
			data: [...paginate(launches, perPage)],
			fullData: [...launches]
		});
	}
}
const mapStateToProps = state => {
	const { isLoading, launches, errors, perPage } = state.launches;
	return {
		isLoading,
		launches,
		errors,
		perPage
	};
};
export default connect(mapStateToProps, { changeItemsPerPage })(App);
