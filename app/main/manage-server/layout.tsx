import { getSpecificServerSettingsOptions } from '@/app/lib/axios/postman';
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
		pathname = myHeaders.get('referer'),
		serverName = pathname?.split('/').pop();

	console.log({ serverName });

	const { data } = await getSpecificServerSettingsOptions(serverName as string);

	console.log({ data });

	return (
		<HydrateManageServerAtoms settingsData={data}>
			{children}
		</HydrateManageServerAtoms>
	);
}

// main/manage-server/test?section="main"
