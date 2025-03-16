import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import NavLink from '../NavLink';
import { MAIN_NAV_LINKS } from '../constants';

export default function NavSection() {
	return (
		<NavigationMenuItem className='flex-center max-md:hidden gap-4;'>
			{MAIN_NAV_LINKS.map(link => (
				<NavLink key={link.label} {...link} />
			))}
		</NavigationMenuItem>
	);
}
