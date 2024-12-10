import Link from 'next/link';
import Button from '../components/utils/Button';

export default function GoIn() {
	return (
		<Button className='px-14'>
			<Link href='/main' className='text-white'>
				Увійти, як авторизований
			</Link>
		</Button>
	);
}
