import React from 'react';
import './SearchInput.css';
const SearchInput = ({ onChange }) => {
	return (
		<div className="d-flex justify-content-center">
			<div className="input-group md-form form-sm search pl-0">
				<input
					className="form-control my-0 py-1 pl-3 purple-border"
					type="text"
					placeholder="Search mission name..."
					aria-label="Search"
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default SearchInput;
