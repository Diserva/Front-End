import { NAV_LINKS } from '@/app/lib/constants/header';
import Link from 'next/link';

export default function Navigation({}) {

	return (
		<nav className='flex gap-4 items-center'>
			{NAV_LINKS.map(({ tKey, href }) => (
				<Link key={tKey} href={href}>{tKey}</Link>
			))}
		</nav>
	);
}
