import { Button } from '@/components/ui/button';
import { headers } from 'next/headers';
import Link from 'next/link';

export default async function NavLink({
	href,
	label
}: {
	href: string;
	label: string;
}) {
	const headersList = await headers(),
		fullUrl = headersList.get('referer') || '',
		pathname = new URL(fullUrl).pathname;

	return (
		<Button asChild variant='link'>
			<Link href={href} className={pathname === href ? 'text-white' : ''}>
				{label}
			</Link>
		</Button>
	);
}
