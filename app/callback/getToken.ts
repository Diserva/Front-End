import { discordApi } from '../lib/redux/discordApi';
import { store } from '../lib/redux/store';

export default async function getToken(body: string): Promise<string> {
	const { data, error } = await store.dispatch(
		discordApi.endpoints.getToken.initiate(body)
	);

	const token = data?.access_token;

	if (!token || error) {
		console.error(error);
		throw 'Не змогли отримати ваш токен. Видає помилку';
	} else {
		return token;
	}
}
