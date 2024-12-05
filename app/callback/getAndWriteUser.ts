import { UserSchema } from '../lib/definitions/apiRequests';
import { serverApi } from '../lib/redux/serverApi';
import { store } from '../lib/redux/store';
import { writeUser } from '../lib/redux/userSlice';

export default async function getAndWriteUser(asyncToken: Promise<string>) {
	const token = await asyncToken;

	const { data } = await store.dispatch(
		serverApi.endpoints.getUserByToken.initiate(token)
	);

	const checkedData = UserSchema.parse(data);

	console.log({ checkedData });

	store.dispatch(writeUser(checkedData));

	console.log({
		store: store.getState()
	});
}
