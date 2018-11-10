import React, { Component } from 'react';
import './App.css';
import Pagination from './components/paginations/Pagination';
import SearchInput from './components/TextInputs/SearchInput';
class App extends Component {
	render() {
		return (
			<div className="container-fluid app">
				<div className="card mb-4">
					<div className="card-body">
						<div className="col-md-12">
							<h2 className="pt-3 pb-4 text-center font-bold font-up title">
								The Last 20 SpaceX Launches
							</h2>
							<SearchInput />
						</div>
					</div>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>Mission Name</th>
								<th>Rocket Name</th>
								<th>Data</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>@twitter</td>
							</tr>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</table>
					<Pagination />
				</div>
			</div>
		);
	}
}

export default App;
