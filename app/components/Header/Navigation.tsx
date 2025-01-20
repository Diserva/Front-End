import { MAIN_NAV_LINKS } from '@/app/lib/constants/header';
import { Button } from '@/components/ui/button';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function Navigation() {
	return (
		<NavigationMenuItem className='flex-center max-md:hidden gap-4'>
			{MAIN_NAV_LINKS.map(link => (
				<NavLink {...link} />
			))}
		</NavigationMenuItem>
	);
}

function NavLink({ href, label }: { href: string; label: string }) {
	return (
		<Button asChild variant='link'>
			<Link href={href}>{label}</Link>
		</Button>
	);
}
