import Logo from './Logo';
import Navigation from './Navigation';
import ProfileSection from './Profile';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@radix-ui/react-navigation-menu';



export default function Header() {
	return (
		<NavigationMenu className='header-cont'>
			<NavigationMenuList className='header'>
				<Logo />
				<Navigation />
				<NavigationMenuItem>
					<ProfileSection />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
