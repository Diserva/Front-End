import Burger from './Burger';
import Logo from './Logo';
import Navigation from './Navigation';
import Profile from './Profile';

export default function Header() {
	return (
		<section className='h-header '>
			<header className='w-full h-header bg-navLayout flex justify-between py-4 px-8 fixed top-0 left-0 z-50 box-border'>
				<section className='flex gap-5 '>
					<Burger />
					<Logo />
				</section>
				<Navigation />
				<Profile />
			</header>
		</section>
	);
}
