import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

export default function NavLink({
	href,
	label
}: {
	href: string;
	label: string;
}) {
	return (
		<Button asChild variant='link'>
			<Link href={href}>{label}</Link>
		</Button>
	);
}
