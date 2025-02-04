'use client';

import { useAtomValue } from 'jotai';
import { amountOfServersAtom, loadTimeAtom } from '../lib/jotai/dashboardAtoms';

export default function AdditionalInfo() {
	const amountOfServers = useAtomValue(amountOfServersAtom);
	const loadTime = useAtomValue(loadTimeAtom);
	const postfix = amountOfServers > 1 ? 'Серверів' : 'Сервер';

	return (
		<section className='w-full flex justify-between text-white h-16 items-end border-t border-t-borderColor my-9'>
			<h3>{`${amountOfServers} ${postfix}`}</h3>
			<h3>{loadTime} секунд</h3>
		</section>
	);
}
