import React from 'react';
import './pagination.css';
const Pagination = props => {
	return (
		<div className="d-flex justify-content-center">
			<nav className="my-4 pt-2">
				<ul className="pagination pagination-circle pg-blue mb-0">
					<li
						className="page-item disabled clearfix d-none d-md-block"
						onClick={props.goFirst}
					>
						<p className="page-btn">First</p>
					</li>
					<li className="page-item disabled">
						<p className="page-btn" aria-label="Previous">
							<span aria-hidden="true">«</span>
						</p>
					</li>
					{props.children}
					<li className="page-item">
						<p className="page-btn" aria-label="Next">
							<span aria-hidden="true">»</span>
						</p>
					</li>
					<li
						className="page-item clearfix d-none d-md-block"
						onClick={props.goLast}
					>
						<p className="page-btn">Last</p>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
