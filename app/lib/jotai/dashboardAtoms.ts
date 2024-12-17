import { atom } from 'jotai';
import { GuildsType } from '../definitions/apiRequests';

export const guildsAtom = atom<GuildsType>();
export const pageAtom = atom(1);
export const searchInputAtom = atom('');

export const filteredGuildsAtom = atom(get => {
	const allGuilds = get(guildsAtom);
	const searchInput = get(searchInputAtom);

	return allGuilds?.filter(({ name }) =>
		name.toLowerCase().includes(searchInput.toLowerCase())
	);
});
export const amountOfServersAtom = atom(get => {
	const guilds = get(guildsAtom);
	return guilds ? guilds.length : 0;
});
