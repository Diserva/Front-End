import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GoInAsAuthorized() {
	return (
		<Button className='px-14'>
			<Link href='/main/dashboard' className='text-white'>
				Увійти, як авторизований
			</Link>
		</Button>
	);
}
