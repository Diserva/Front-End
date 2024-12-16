import { bodySchema } from '../lib/definitions/apiRequests';
import { UserType } from '../lib/definitions/apiRequests';
import { redirect } from 'next/navigation';
import { getTokenQuery } from '../lib/axios/discord';
import { getUserByNewToken } from '../lib/axios/server';

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
	const { data } = await getTokenQuery(body);
	const token = data?.access_token;

	return token;
}

export async function getUser(asyncToken: Promise<string>): Promise<UserType> {
	console.log(await asyncToken);

	const { data } = await getUserByNewToken(await asyncToken);

	return data;
}

export async function onSuccess() {
	redirect('/');
}
