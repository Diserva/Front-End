'use client';

import { useAtomValue } from 'jotai';
import { amountOfServersAtom } from '../lib/jotai/dashboardAtoms';

export default function AdditionalInfo() {
	const amountOfServers = useAtomValue(amountOfServersAtom);
	const postfix = amountOfServers > 1 ? 'Серверів' : 'Сервер';

	return (
		<section className='w-full flex justify-between text-white h-16 items-end border-t border-t-borderColor my-9'>
			<h3>{`${amountOfServers} ${postfix}`}</h3>
			<h3>0.123 секунд</h3>
		</section>
	);
}
