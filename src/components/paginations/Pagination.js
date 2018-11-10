import React from 'react';
import './pagination.css';
const Pagination = () => {
	return (
		<div className="d-flex justify-content-center">
			<nav className="my-4 pt-2">
				<ul className="pagination pagination-circle pg-blue mb-0">
					<li className="page-item disabled clearfix d-none d-md-block">
						<a className="page-btn" href="/">
							First
						</a>
					</li>
					<li className="page-item disabled">
						<a className="page-btn" aria-label="Previous" href="/">
							<span aria-hidden="true">«</span>
						</a>
					</li>
					<li className="page-item active">
						<a className="page-btn" href="/">
							1
						</a>
					</li>
					<li className="page-item">
						<a className="page-btn" href="/">
							2
						</a>
					</li>
					<li className="page-item">
						<a className="page-btn" href="/">
							3
						</a>
					</li>
					<li className="page-item">
						<a className="page-btn" href="/">
							4
						</a>
					</li>
					<li className="page-item">
						<a className="page-btn" href="/">
							5
						</a>
					</li>
					<li className="page-item">
						<a className="page-btn" aria-label="Next" href="/">
							<span aria-hidden="true">»</span>
						</a>
					</li>
					<li className="page-item clearfix d-none d-md-block">
						<a className="page-btn" href="/">
							Last
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
