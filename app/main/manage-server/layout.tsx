import { getSpecificServerSettingsOptions } from '@/app/lib/axios/mockedServer';
import HydrateManageServerAtoms from '@/app/lib/providers/HydrateManageServerAtoms';
import { headers } from 'next/headers';
import { ReactNode } from 'react';

export default async function page({ children }: { children: ReactNode }) {
	const myHeaders = await headers(),
		pathname = myHeaders.get('x-url'),
		serverName = pathname?.split('/').pop();

	const { data } = await getSpecificServerSettingsOptions(serverName as string);

	return (
		<HydrateManageServerAtoms settingsData={data}>
			{children}
		</HydrateManageServerAtoms>
	);
}

