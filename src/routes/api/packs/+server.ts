import packs from '../../../data/packs.json';
import { sortByProperty } from '../../../utils/helpers';

import type { RequestHandler } from './$types';

const getAllPackNames = () => {
	return packs
		.map((pack: Pack) => ({ name: pack.name, official: pack.official }))
		.sort((a, b) => sortByProperty(a, b, 'name'));
};

const getPacks = (params: string) => {
	const packTypes = params.split(`,`);
	if (packTypes[0] === ``) {
		return packs;
	}

	return packs.filter((pack) => packTypes?.includes(pack.name));
};

export const GET: RequestHandler = ({ url }) => {
	if (url.searchParams.has(`packs`)) {
		const params = url.searchParams.get(`packs`) || ``;

		const body = JSON.stringify(getPacks(params));
		return new Response(body, { status: 200 });
	}

	const body = JSON.stringify(getAllPackNames());
	return new Response(body, { status: 200 });
};
