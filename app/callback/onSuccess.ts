import { redirect } from 'next/navigation';

export default async function onSuccess() {
	redirect('/');
}
