'use client';

import { useAtom } from 'jotai';
import { ReactNode, useCallback } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { pageAtom } from '../lib/jotai/dashboardAtoms';

export default function NavigatePages() {
	const [page, setPage] = useAtom(pageAtom);
	const navLastPage = useCallback(() => setPage(prev => prev - 1), []);
	const navNextPage = useCallback(() => setPage(prev => prev + 1), []);
	return (
		<section className='w-full flex justify-center text-white mt-11'>
			<button
				className='page-section rounded-[4px] bg-navLayout'
				onClick={navLastPage}>
				<FaChevronLeft />
			</button>

			<section className='page-section'>{page}</section>

			<button
				onClick={navNextPage}
				className='page-section rounded-[4px] bg-navLayout'>
				<FaChevronRight />
			</button>
		</section>
	);
}
