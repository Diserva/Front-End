import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { MAIN_NAV_LINKS } from '@/app/lib/constants/header';
import NavLink from '../NavLink';

export default function NavSection() {
	return (
		<NavigationMenuItem className='flex-center max-md:hidden gap-4;'>
			{MAIN_NAV_LINKS.map(link => (
				<NavLink key={link.label} {...link} />
			))}
		</NavigationMenuItem>
	);
}
