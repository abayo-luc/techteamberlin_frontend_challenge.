export const contains = (missionName, query) => {
	//checking if missionName the entered query
	if (missionName.toLocaleLowerCase().includes(query)) {
		return true;
	}
	return false;
};
