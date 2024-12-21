import Burger from './Burger';
import Logo from './Logo';
import Navigation from './Navigation';
import Profile from './Profile';

export default function Header() {
	return (
		<section className='h-header '>
			<header className='w-full bg-navLayout flex justify-between py-4 px-8 fixed top-0 left-0 z-50 '>
				<div className='w-full absolute top-0 left-0 h-header bg-inherit -z-10 hidden max-md:flex' />
				<section className='flex gap-5 max-md:order-1'>
					<Burger />
					<Logo />
				</section>
				<Navigation />
				<Profile />
			</header>
		</section>
	);
}
