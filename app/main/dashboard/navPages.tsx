'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

import clsx from 'clsx';
import { ReactNode } from 'react';
import {
	decrementPageAtom,
	incrementPageAtom,
	maxPageAtom,
	pageAtom
} from '@/app/lib/jotai/dashboardAtoms';

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
				'!bg-lightBg': disabled
			})}
			onClick={onCLick}
			aria-label='move back or forward'
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
		<section className='pagination-cont'>
			<NavPrevPage />
			<CurrentPage />
			<NavNextPage />
		</section>
	);
}
