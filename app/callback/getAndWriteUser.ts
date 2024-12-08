import { UserSchema, UserType } from '../lib/definitions/apiRequests';
import { serverApi } from '../lib/redux/serverApi';
import { store } from '../lib/redux/store';
import { writeAndLoginUser } from '../lib/redux/userSlice';

export async function getUser(asyncToken: Promise<string>) {
	const { data, status } = await store.dispatch(
		serverApi.endpoints.getUserByNewToken.initiate(await asyncToken)
	);

	console.log({ token: await asyncToken, data: data });

	return UserSchema.parse(data);
}

export async function writeUserInReduxAndLogin(data: Promise<UserType>) {
	store.dispatch(writeAndLoginUser(await data));
}
