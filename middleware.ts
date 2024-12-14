import { NextRequest, NextResponse } from 'next/server';

function ifNotAuthorized(request: NextRequest) {
	if (request.nextUrl.pathname === '/main') { // ця перевірка не є чимось хорошим. Треба буде доробити
		console.log(request.nextUrl.pathname);
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

	return NextResponse.next();
}
