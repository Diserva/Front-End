export default function generateBody(code: string) {
	const body = new URLSearchParams({
		client_id: '1168642212997894276',
		client_secret: 'HpFGBr5-GMi04Cm2nYzlldGkSXBGequM',
		grant_type: 'authorization_code',
		code: code,
		redirect_uri: 'http://localhost:3000/callback',
		scope: 'identify+guilds'
	});

	console.log({ body: body.toString() });

	return body.toString();
}

//"client_id=1168642212997894276&client_secret=HpFGBr5-GMi04Cm2nYzlldGkSXBGequM&grant_type=authorization_code&code=5DdRHPiGLrrlF0F1R9BOofjur8K0Bh&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=identify%2Bguilds"
