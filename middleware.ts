import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';

function ifNotAuthorized(request: NextRequest) {
	const response = NextResponse.rewrite(new URL('/', request.url));
	response.cookies.set('authorized', 'authorizing');

	return response;
}

function ifAuthorizing(request: NextRequest) {
	const nextUrl = request.nextUrl.clone();
	const path = nextUrl.pathname;

	if (path === '/main') {
		nextUrl.pathname = '/';
		return NextResponse.redirect(nextUrl);
	} else {
		return NextResponse.next();
	}
}

function ifAuthorized(request: NextRequest) {
	const nextUrl = request.nextUrl.clone();
	if (nextUrl.pathname !== '/main') {
		return NextResponse.rewrite(nextUrl);
	} else {
		return NextResponse.next();
	}
}

export default function middleware(request: NextRequest) {
	const authorized = request.cookies.get('authorized');

	if (!authorized) {
		return ifNotAuthorized(request);
	} else if (authorized.value === 'authorizing') {
		return ifAuthorizing(request);
	} else {
		return ifAuthorized(request);
	}
}
