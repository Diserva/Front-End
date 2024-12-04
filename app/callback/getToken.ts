import { discordApi } from '../lib/redux/discordApi';
import { store } from '../lib/redux/store';

export default async function getToken(body: string): Promise<string> {
	console.log({ mySuperBody: body });

	const { data, error } = await store.dispatch(
		discordApi.endpoints.getToken.initiate(body)
	);

	const token = data?.access_token;

	// const response = await fetch('https://discord.com/api/oauth2/token', {
	// 	headers: {
	// 		'Content-Type': 'application/x-www-form-urlencoded'
	// 	},
	// 	body
	// });

	// const data = await response.json();
	// const token = data.access_token;

	console.log({ token });

	if (!token) {
		throw 'Не змогли отримати ваш токен. Вийшла якась помилочка' + error;
	} else {
		return token;
	}
}
