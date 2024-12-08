import Link from 'next/link';
import Button from './Button';

export default function GoIn() {
	return (
		<Button>
			<Link href='/home'>Увійти, як авторизований</Link>
		</Button>
	);
}
