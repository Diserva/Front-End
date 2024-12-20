import { atom } from 'jotai';
import { GuildsType } from '../definitions/apiRequests';
import { MAX_PAGE_LENGTH } from '../constants/dashboard';

export const guildsAtom = atom<GuildsType>();
export const pageAtom = atom(1);
export const searchInputAtom = atom('');

export const filteredGuildsAtom = atom(get => {
	const allGuilds = get(guildsAtom);
	const pageIndex = get(pageAtom) - 1;
	const searchInput = get(searchInputAtom);

	const filteredBySearchInput = allGuilds?.filter(({ name }) =>
		name.toLowerCase().includes(searchInput.toLowerCase())
	);
	const guildsOnPage = filteredBySearchInput?.slice(
		pageIndex * MAX_PAGE_LENGTH,
		MAX_PAGE_LENGTH
	);

	return guildsOnPage;
});
export const amountOfServersAtom = atom(get => {
	const guilds = get(guildsAtom);
	return guilds ? guilds.length : 0;
});
export const maxPageAtom = atom(get => {
	const amountOfGuilds = get(filteredGuildsAtom)?.length;
	return amountOfGuilds ? Math.ceil(amountOfGuilds / MAX_PAGE_LENGTH) : 1;
});

export const incrementPageAtom = atom(null, (get, set) =>
	set(pageAtom, lastPage => lastPage + 1)
);
export const decrementPageAtom = atom(null, (get, set) =>
	set(pageAtom, lastPage => lastPage - 1)
);
