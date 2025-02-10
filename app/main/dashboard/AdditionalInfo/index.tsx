'use client';

import {
	amountOfServersAtom,
	loadTimeAtom
} from '@/app/lib/jotai/dashboardAtoms';
import { useAtomValue } from 'jotai';
import { AdditionalInfoUI } from './UI';

export default function AdditionalInfo() {
	const amountOfServers = useAtomValue(amountOfServersAtom);
	const loadTime = useAtomValue(loadTimeAtom);
	const postfix = amountOfServers > 1 ? 'Серверів' : 'Сервер';

	return <AdditionalInfoUI {...{ amountOfServers, loadTime, postfix }} />;
}
