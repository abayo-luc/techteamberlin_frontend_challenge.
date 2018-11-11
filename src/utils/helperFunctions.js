export const contains = (missionName, query) => {
	//checking if missionName the entered query
	if (missionName.toLocaleLowerCase().includes(query)) {
		return true;
	}
	return false;
};

export const paginate = (data, perPage) => {
	let flatData = [...data];
	let nestedData = [];
	let offset = flatData.length / perPage;
	if (flatData.length % perPage !== 0) {
		offset = Math.round(offset) + 1;
	}
	while (offset > 0) {
		offset -= 1;
		nestedData.push(flatData.splice(0, perPage));
	}
	return nestedData;
};
