import { MAIN_NAV_LINKS } from '@/app/lib/constants/header';
import NavLink from './NavLink';

export default function Navigation() {
	return (
		<>
			{MAIN_NAV_LINKS.map(link => (
				<NavLink key={link.label} {...link} />
			))}
		</>
	);
}
