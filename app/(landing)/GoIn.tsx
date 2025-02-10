import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GoIn() {
	return (
		<Button className='px-14'>
			<Link
				href={process.env.NEXT_PUBLIC_DASHBOARD_ROOT as string}
				className='text-white'>
				Увійти, як авторизований
			</Link>
		</Button>
	);
}
