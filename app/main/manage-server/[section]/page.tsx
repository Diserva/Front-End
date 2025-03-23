import { getSpecificServerSettingsOptions } from '@/app/lib/axios/mockedServer';
import HydrateManageServerAtoms from '@/app/lib/providers/HydrateManageServerAtoms';
import { headers } from 'next/headers';
import Render from './Render';
import SettingsHeading from './PageHeading';
import { inter } from '@/app/lib/fonts';
import clsx from 'clsx';

export default async function page() {
	const myHeaders = await headers(),
		pathname = myHeaders.get('x-url'),
		serverName = pathname?.split('/').pop();

	console.log('here I work');

	const { data } = await getSpecificServerSettingsOptions(serverName as string);

	return (
		<HydrateManageServerAtoms settingsData={data}>
			<section className={clsx(inter.className, 'flex flex-col w-full')}>
				<SettingsHeading serverName={serverName as string} />
				<Render />
			</section>
		</HydrateManageServerAtoms>
	);
}
