'use client';

import { selectDashboard } from '../lib/redux/CreateDashboardStore';
import { useAppSelector } from '../lib/redux/store';

export default function AdditionalInfo() {
	const dashboard = useAppSelector(selectDashboard);
	const postfix = dashboard.amoutOfServers > 1 ? 'Серверів' : 'Сервер';

	return (
		<section className='w-full flex justify-between text-white h-16 items-end border-t border-t-borderColor my-9'>
			<h3>{`${dashboard.amoutOfServers} ${postfix}`}</h3>
			<h3>0.123 секунд</h3>
		</section>
	);
}
