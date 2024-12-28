'use server';

import { cookies } from 'next/headers';
import { getGuilds, getUserWithExistingToken } from '../server';
import { GuildsType, UserType } from '../../definitions/apiRequests';

async function initUserStore(credentials: RequestCredentials) {
	const { data } = await getUserWithExistingToken(credentials);
	return data;
}

async function initDashboardStore(credentials: RequestCredentials) {
	const { data } = await getGuilds(credentials);
	return data;
}

export async function getHydrationDataList() {
	const cookieStore = await cookies();
	const credentials = cookieStore.toString();

      const startTime = Date.now();
	const [userInitState, guilds] = await Promise.all([
		initUserStore(credentials as RequestCredentials),
		initDashboardStore(credentials as RequestCredentials)
	]);
      const endTime = Date.now();

	const hydrationDataList: HydrationDataList = {
		userInitState,
		dashboardInitState: {
                  guilds,
                  loadTime: ((endTime - startTime) / 1000).toFixed(2)
            }
	};

	return hydrationDataList;
}

export type HydrationDataList = {
	userInitState: UserType;
	dashboardInitState: {
		guilds: GuildsType;
		loadTime: string;
	};
};
