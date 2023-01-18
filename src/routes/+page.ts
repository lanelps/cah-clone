import type { PageLoad } from './$types';

export const load: PageLoad = ({ fetch }) => {
	const fetchPacks = async () => {
		const res = await fetch(`/api/packs`);
		const data = await res.json();
		return data;
	};

	return {
		packs: fetchPacks()
	};
};
