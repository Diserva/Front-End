import {
	NavigationMenu,
	NavigationMenuList
} from '@/components/ui/navigation-menu';
import ProfileSection from './Profile';
import LogoMenuItemUI from './Logo';
import NavSection from './Navigation';

export default function Header() {
	return (
		<NavigationMenu className='nav'>
			<NavigationMenuList className='header'>
				<LogoMenuItemUI />
				<NavSection />
				<ProfileSection />
			</NavigationMenuList>
		</NavigationMenu>
	);
}
