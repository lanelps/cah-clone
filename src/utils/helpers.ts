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

export const shuffleArray: ShuffleArray = (arr) => {
	return arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
};
