'use server';

import { cookies } from 'next/headers';
import { getGuilds, getUserWithExistingToken } from '../server';
import { GuildsType, UserType } from '../../definitions/apiRequests';

export async function doHydrationListReqWithCreds<T>( // do hydration list request with credentials
	callback: (credentials: RequestCredentials) => Promise<T>
): Promise<T> {
	const cookieStore = await cookies();
	const credentials = cookieStore.toString();

	return await callback(credentials as RequestCredentials);
}

export async function getUserHydrationList(
	credentials: RequestCredentials
): Promise<UserType> {
	const { data } = await getUserWithExistingToken(credentials);

	return data;
}

type GuildsHydrationSet = {
	guilds: GuildsType;
	loadTime: string;
};

export async function getGuildsHydrationList(
	credentials: RequestCredentials
): Promise<GuildsHydrationSet> {
	const startTime = Date.now();
	const { data } = await getGuilds(credentials);
	const endTime = Date.now();

	const loadTimeFormatted = ((endTime - startTime) / 1000).toFixed(2);

	return {
		guilds: data,
		loadTime: loadTimeFormatted
	};
}
