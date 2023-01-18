import packs from '../../../data/packs.json';

import { sortByProperty } from '../../../utils/helpers';

export const GET = () => {
	const filteredPacks = packs
		.map((card: Card) => ({ name: card.name, official: card.official }))
		.sort((a, b) => sortByProperty(a, b, 'name'));

	const body = JSON.stringify(filteredPacks);

	return new Response(body, { status: 200 });
};
