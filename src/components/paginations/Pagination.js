import React from 'react';
import './pagination.css';
const Pagination = () => {
	return (
		<div className="d-flex justify-content-center">
			<nav className="my-4 pt-2">
				<ul className="pagination pagination-circle pg-blue mb-0">
					<li className="page-item disabled clearfix d-none d-md-block">
						<a className="page-link" href="/">
							First
						</a>
					</li>
					<li className="page-item disabled">
						<a className="page-link" aria-label="Previous" href="/">
							<span aria-hidden="true">«</span>
							<span className="sr-only">Previous</span>
						</a>
					</li>
					<li className="page-item active">
						<a className="page-link" href="/">
							1
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="/">
							2
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="/">
							3
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="/">
							4
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="/">
							5
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" aria-label="Next" href="/">
							<span aria-hidden="true">»</span>
							<span className="sr-only">Next</span>
						</a>
					</li>
					<li className="page-item clearfix d-none d-md-block">
						<a className="page-link" href="/">
							Last
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
