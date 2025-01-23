import {
	NavigationMenu,
	NavigationMenuList
} from '@/components/ui/navigation-menu';
import Logo from './Logo';
import Navigation from './Navigation';
import ProfileSection from './Profile-server';

export default function Header() {
	return (
		<NavigationMenu className='h-header bg-navLayout w-full [&>div]:w-screen'>
			<NavigationMenuList className='flex justify-between w-full py-4 px-8 !space-x-0'>
				<Logo />
				<Navigation />
				<ProfileSection />
			</NavigationMenuList>
		</NavigationMenu>
	);
}
