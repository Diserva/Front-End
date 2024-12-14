'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logut() {
	const cookieStore = await cookies();
	cookieStore.delete('jwt');
	redirect('/');
}
