import { atom, PrimitiveAtom } from 'jotai';

export const navShownAtom = atom(false);
export const modalShownAtom = atom(false);

export const getToggleFunc = (target: PrimitiveAtom<boolean>) => {
	return atom(null, (get, set) => {
		set(target, prev => !prev);
	});
};

export const toggleNavShownAtom = getToggleFunc(navShownAtom);
export const toggleModalShown = getToggleFunc(modalShownAtom);
