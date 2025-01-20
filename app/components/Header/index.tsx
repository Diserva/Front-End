import {
	NavigationMenu,
	NavigationMenuList
} from '@/components/ui/navigation-menu';
import Logo from './Logo';
import Navigation from './Navigation';
import ProfileSection from './Profile-server';

export default function Header() {
	return (
		<NavigationMenu className='header-cont h-header bg-navLayout'>
			<NavigationMenuList className='flex justify-between w-screen py-4 px-8'>
				<Logo />
				<Navigation />
				<ProfileSection />
			</NavigationMenuList>
		</NavigationMenu>
	);
}
