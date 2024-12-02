import generateBody from './generateBody';

export default async function getToken(body: string): Promise<string> {
	console.log({mySuperBody: body});

	const response = await fetch('https://discord.com/api/oauth2/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body
		// body: "client_id=1168642212997894276&client_secret=HpFGBr5-GMi04Cm2nYzlldGkSXBGequM&grant_type=authorization_code&code=Ytyb4AnO8ZLF6sDzzaSAOUlUUKWoYm&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=identify%2Bguilds"
	});

	const data = await response.json();
	const token = data.access_token;

	console.log({ data, token });

	return token;
}
