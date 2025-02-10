import { NextRequest, NextResponse } from 'next/server';
import { pipe } from 'fp-ts/lib/function';
import { getTokenQuery } from '../lib/axios/discord';
import { getUserHeaders } from '../lib/axios/server';
import { parseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { bodySchema } from '../lib/definitions/apiRequests';

export async function GET(req: NextRequest) {
	const jwt = await getCookies(req);
	const res = NextResponse.redirect(
		new URL(process.env.NEXT_PUBLIC_DASHBOARD_ROOT as string, req.url)
	);

	if (!jwt) {
		return new NextResponse('failed. Something went wrong', { status: 400 });
	}

	res.cookies.set('jwt', jwt, {
		maxAge: 24 * 60 * 60
	});

	return res;
}

function getCookies(req: NextRequest) {
	const params = req.nextUrl.searchParams;

	if (!params.has('code')) {
		return 'no code exception';
	}

	return pipe(params.get('code') as string, generateBody, getToken, getJwt);
}

async function getToken(body: string): Promise<string> {
	const { data } = await getTokenQuery(body);
	const token = data?.access_token;

	return token;
}

function generateBody(code: string) {
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

async function getJwt(token: Promise<string>) {
	const { headers } = await getUserHeaders(await token);

	if (!headers['set-cookie']) {
		throw 'there were no cookies in response';
	}
	
	const cookies = parseCookie(headers['set-cookie'][0] as string);
	return cookies.get('jwt') as string;
}
