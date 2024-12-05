import { discordApi } from '../lib/redux/discordApi';
import { store } from '../lib/redux/store';

export default async function getToken(body: string): Promise<string> {
	console.log({ mySuperBody: body });

	const { data, error } = await store.dispatch(
		discordApi.endpoints.getToken.initiate(body)
	);

	const token = data?.access_token;

	console.log({ token });

	if (!token || error) {
		throw 'Не змогли отримати ваш токен. Вийшла якась помилочка' + error;
	} else {
		return token;
	}
}
