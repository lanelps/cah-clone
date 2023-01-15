export const sortByProperty: SortByProperty = (
	first,
	second,
	property,
	options = { desc: false }
) => {
	if (options.desc) {
		return first[property] < second[property] ? 1 : -1 || 0;
	} else {
		return first[property] < second[property] ? -1 : 1 || 0;
	}
};
