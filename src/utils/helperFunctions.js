export const contains = (missionName, query) => {
	if (missionName.toLocaleLowerCase().includes(query)) {
		return true;
	}
	return false;
};
