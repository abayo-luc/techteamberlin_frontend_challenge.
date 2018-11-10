import React from 'react';
import './pagination.css';
const Pagination = () => {
	return (
		<div class="d-flex justify-content-center">
			<nav class="my-4 pt-2">
				<ul class="pagination pagination-circle pg-blue mb-0">
					<li class="page-item disabled clearfix d-none d-md-block">
						<a class="page-link" href="/">
							First
						</a>
					</li>
					<li class="page-item disabled">
						<a class="page-link" aria-label="Previous" href="/">
							<span aria-hidden="true">«</span>
							<span class="sr-only">Previous</span>
						</a>
					</li>
					<li class="page-item active">
						<a class="page-link" href="/">
							1
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="/">
							2
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="/">
							3
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="/">
							4
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="/">
							5
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" aria-label="Next" href="/">
							<span aria-hidden="true">»</span>
							<span class="sr-only">Next</span>
						</a>
					</li>
					<li class="page-item clearfix d-none d-md-block">
						<a class="page-link" href="/">
							Last
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
