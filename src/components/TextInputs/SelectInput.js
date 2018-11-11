import React from 'react';

const SelectInput = ({ values, onChange }) => {
	return (
		<select class="custom-select custom-select-sm" onChange={onChange}>
			<option selected value={5}>
				display items
			</option>
			{values.map((value, index) => {
				return (
					<option value={value} key={index}>
						{value}
					</option>
				);
			})}
		</select>
	);
};

export default SelectInput;
