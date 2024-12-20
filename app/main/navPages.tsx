'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import {
	decrementPageAtom,
	incrementPageAtom,
	maxPageAtom,
	pageAtom
} from '../lib/jotai/dashboardAtoms';
import clsx from 'clsx';
import { ReactNode } from 'react';

function Btn({
	disabled,
	onCLick,
	children
}: {
	disabled: boolean;
	onCLick: () => void;
	children: ReactNode;
}) {
	return (
		<button
			className={clsx('page-section rounded-[4px] bg-navLayout', {
				'bg-lightBg': disabled
			})}
			onClick={onCLick}
			disabled={disabled}>
			{children}
		</button>
	);
}

function NavPrevPage() {
	const decrement = useSetAtom(decrementPageAtom);
	const disabled = useAtomValue(pageAtom) === 1;

	return (
		<Btn onCLick={decrement} disabled={disabled}>
			<FaChevronLeft />
		</Btn>
	);
}

function NavNextPage() {
	const increment = useSetAtom(incrementPageAtom);
	const disabled = useAtomValue(pageAtom) === useAtomValue(maxPageAtom);

	return (
		<Btn onCLick={increment} disabled={disabled}>
			<FaChevronRight />
		</Btn>
	);
}

function CurrentPage() {
	const page = useAtomValue(pageAtom);
	return <section className='page-section'>{page}</section>;
}

export default function NavigatePages() {
	return (
		<section className='w-full flex justify-center text-white mt-11'>
			<NavPrevPage />
			<CurrentPage />
			<NavNextPage />
		</section>
	);
}
