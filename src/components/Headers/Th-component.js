import React from 'react';
//display sort icon for sortable titles
const ThComponent = ({ title, sortable, onClick }) => {
	return (
		<th onClick={onClick} className={sortable ? 'sortable' : ''}>
			{title}
			{sortable &&
				<img src={require('../../assets/images/icons/sort.svg')} alt="" />}
		</th>
	);
};

export default ThComponent;
