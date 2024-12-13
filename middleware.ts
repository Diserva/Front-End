import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
	const authorized = request.cookies.get('authorized');

	if (!authorized) {
		const response = NextResponse.rewrite(new URL('/', request.url));
		response.cookies.set('authorized', 'authorizing');

		return response;
	}

	return NextResponse.next();
}
