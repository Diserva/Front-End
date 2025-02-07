import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NavLink({
	href,
	label
}: {
	href: string;
	label: string;
}) {
	console.log({ href, label });

	return (
		<Button asChild variant='link'>
			<Link href={href}>{label}</Link>
		</Button>
	);
}
