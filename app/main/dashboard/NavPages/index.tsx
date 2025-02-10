'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import {
	decrementPageAtom,
	incrementPageAtom,
	maxPageAtom,
	pageAtom
} from '@/app/lib/jotai/dashboardAtoms';
import { BtnNextUI, BtnPrevUI, CurrentPageUI } from './UI';

function NavPrevPage() {
	const decrement = useSetAtom(decrementPageAtom);
	const disabled = useAtomValue(pageAtom) === 1;

	return <BtnPrevUI onClick={decrement} disabled={disabled} />;
}

function NavNextPage() {
	const increment = useSetAtom(incrementPageAtom);
	const disabled = useAtomValue(pageAtom) === useAtomValue(maxPageAtom);

	return <BtnNextUI onClick={increment} disabled={disabled} />;
}

function CurrentPage() {
	const page = useAtomValue(pageAtom);
	return <CurrentPageUI page={page} />;
}

export default function NavigatePages() {
	return (
		<section className='pagination-cont'>
			<NavPrevPage />
			<CurrentPage />
			<NavNextPage />
		</section>
	);
}
