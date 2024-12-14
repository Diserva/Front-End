'use server'
import { login } from '../lib/actions/auth';

export default async function onSuccess() {
	'use server';
	login();
}
