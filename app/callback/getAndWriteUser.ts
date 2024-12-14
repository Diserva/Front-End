import { UserType } from '../lib/definitions/apiRequests';
import { serverApi } from '../lib/redux/serverApi';
import { store } from '../lib/redux/store';
import { writeAndLoginUser } from '../lib/redux/userSlice';

export async function getUser(asyncToken: Promise<string>): Promise<UserType> {
	const { data, error } = await store.dispatch(
		serverApi.endpoints.getUserByNewToken.initiate(await asyncToken)
	);

	if (!data || error) {
		throw error;
	} else {
		return data;
	}
}

export async function writeUserInReduxAndLogin(data: Promise<UserType>) {
	store.dispatch(writeAndLoginUser(await data));
}
