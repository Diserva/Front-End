import { atom } from 'jotai';

export const navShownAtom = atom(false);

export const toggleNavShownAtom = atom(null, (get, set) =>
	set(navShownAtom, prev => !prev)
);
