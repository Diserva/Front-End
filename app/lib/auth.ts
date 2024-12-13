'use server';

import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function login() {
	const cookieStore = await cookies();

	cookieStore.set('authorized', 'true');
}

export async function startAuth(request: NextRequest) {
      
}

export async function logut() {
	const cookieStore = await cookies();

	cookieStore.delete('authorized');
}
