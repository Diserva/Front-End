import { NAV_LINKS } from '@/app/lib/constants/header';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Navigation({}) {

	return (
		<nav>
			{NAV_LINKS.map(({ tKey, href }) => (
				<Link key={tKey} href={href}> </Link>
			))}
		</nav>
	);
}
