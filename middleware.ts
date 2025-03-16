import { NextRequest, NextResponse } from 'next/server';

function ifNotAuthorized(request: NextRequest) {
	if (request.nextUrl.pathname.startsWith('/main')) {
		return NextResponse.redirect(new URL('/', request.url));
	} else {
		return NextResponse.next();
	}
}

export default function middleware(request: NextRequest) {
	const authorized = request.cookies.get('jwt');

	if (!authorized) {
		return ifNotAuthorized(request);
	}

	// add url property to headers so we can access pathname from server components
	const requestHeaders = new Headers(request.headers);
	requestHeaders.set('x-url', request.nextUrl.pathname);

	return NextResponse.next({
		request: {
			headers: requestHeaders
		}
	});
}
