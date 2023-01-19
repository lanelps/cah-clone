export const ssr = false;

import type { PageLoad } from '../$types';

export const load: PageLoad = ({ url, fetch }) => {
	const fetchPacks = async () => {
		const res = await fetch(
			`/api/packs?packs=${
				url.searchParams.has(`packs`) ? encodeURIComponent(url.searchParams.get(`packs`) || ``) : ``
			}`
		);
		const data = await res.json();
		return data;
	};

	return {
		packs: fetchPacks()
	};
};
