import { bodySchema } from '../lib/definitions/apiRequests';

export default function generateBody(code: string) {
	const body = new URLSearchParams(
		bodySchema.parse({
			client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
			client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
			grant_type: 'authorization_code',
			code: code,
			redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
			scope: 'identify+guilds'
		})
	);

	return body.toString();
}
