import { bodySchema } from '../lib/definitions/apiRequests';
import { UserType } from '../lib/definitions/apiRequests';
import { serverApi } from '../lib/redux/serverApi';
import { store } from '../lib/redux/store';
import { writeUser } from '../lib/redux/userSlice';
import { redirect } from 'next/navigation';
import { discordApi } from '../lib/redux/discordApi';

export function generateBody(code: string) {
	const body = new URLSearchParams(
		bodySchema.parse({
			client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
			client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
			grant_type: 'authorization_code',
			code,
			redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
			scope: 'identify+guilds'
		})
	);

	return body.toString();
}

export async function getToken(body: string): Promise<string> {
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

export async function writeUserInRedux(data: Promise<UserType>) {
	store.dispatch(writeUser(await data));
}

export async function onSuccess() {
	redirect('/');
}
