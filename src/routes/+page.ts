import cards from '../data/cards.json';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		cards
	};
};
