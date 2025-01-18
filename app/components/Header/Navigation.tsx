import { NAV_LINKS } from '@/app/lib/constants/header';
import { Button } from '@/components/ui/button';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

export default function Navigation() {
	return (
		<NavigationMenuItem className='flex-center max-md:hidden gap-4'>
			{NAV_LINKS.map(({ tKey, href }) => (
				<Button variant={"link"}>
					<Link key={tKey} href={href}>
						{tKey}
					</Link>
				</Button>

			))}
		</NavigationMenuItem>
	);
}
