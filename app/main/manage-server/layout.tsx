import { getSpecificServerSettingsOptions } from '@/app/lib/axios/mockedServer';
import HydrateManageServerAtoms from '@/app/lib/providers/HydrateManageServerAtoms';
import { headers } from 'next/headers';
import { ReactNode } from 'react';

export default async function page({
	searchParams,
	children
}: {
	searchParams: Promise<{ 'server-name': string }>;
	children: ReactNode;
}) {
	const myHeaders = await headers(),
		pathname = myHeaders.get('x-url'),
		serverName = pathname?.split('/').pop();

	console.log({ serverName, pathname });

	const { data } = await getSpecificServerSettingsOptions(serverName as string);

	console.log({ data });

	return (
		<HydrateManageServerAtoms settingsData={data}>
			{children}
		</HydrateManageServerAtoms>
	);
}

// main/manage-server/test?section="main"
