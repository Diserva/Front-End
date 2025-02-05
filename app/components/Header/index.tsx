import {
	NavigationMenu,
	NavigationMenuList
} from '@/components/ui/navigation-menu';
import LogoMenuItem from './Logo';
import Navigation from './Navigation';
import ProfileSection from './Profile';

export default function Header() {
	return (
		<NavigationMenu className='nav'>
			<NavigationMenuList className='header'>
				<LogoMenuItem />
				<Navigation />
				<ProfileSection />
			</NavigationMenuList>
		</NavigationMenu>
	);
}
