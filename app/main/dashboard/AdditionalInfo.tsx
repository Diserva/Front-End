'use client';

import {
	amountOfServersAtom,
	loadTimeAtom
} from '@/app/lib/jotai/dashboardAtoms';
import { useAtomValue } from 'jotai';

export default function AdditionalInfo() {
	const amountOfServers = useAtomValue(amountOfServersAtom);
	const loadTime = useAtomValue(loadTimeAtom);
	const postfix = amountOfServers > 1 ? 'Серверів' : 'Сервер';

	return (
		<section className='additional-info-func'>
			<h3>{`${amountOfServers} ${postfix}`}</h3>
			<h3>{loadTime} секунд</h3>
		</section>
	);
}
