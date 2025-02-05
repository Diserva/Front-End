'use server';

import { cookies } from 'next/headers';
import { getGuilds, getUserWithExistingToken } from '../server';
import { userAtom } from '../../jotai/userAtoms';
import { guildsAtom, loadTimeAtom } from '../../jotai/dashboardAtoms';
import { HydrationList } from '../../definitions/atoms';

export async function doHydrationListReqWithCreds( // do hydration list request with credentials
	callback: (credentials: RequestCredentials) => Promise<HydrationList>
): Promise<HydrationList> {
	"use server"
	const cookieStore = await cookies();
	const credentials = cookieStore.toString();

	return await callback(credentials as RequestCredentials);
}

export async function getUserHydrationList(
	credentials: RequestCredentials
): Promise<HydrationList> {
	const { data }: { data: unknown } = await getUserWithExistingToken(
		credentials
	);

	return [[userAtom, data]];
}

export async function getGuildsHydrationList(
	credentials: RequestCredentials
): Promise<HydrationList> {
	const startTime = Date.now();
	const { data } = await getGuilds(credentials);
	const endTime = Date.now();

	const loadTimeFormatted = ((endTime - startTime) / 1000).toFixed(2);

	return [
		[guildsAtom, data],
		[loadTimeAtom, loadTimeFormatted]
	];
}
