import React from 'react';
import './SearchInput.css';
const SearchInput = () => {
	return (
		<div className="input-group md-form form-sm search pl-0">
			<input
				class="form-control my-0 py-1 pl-3 purple-border"
				type="text"
				placeholder="Search something here..."
				aria-label="Search"
			/>
		</div>
	);
};

export default SearchInput;
