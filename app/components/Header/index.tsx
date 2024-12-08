import Logo from './Logo';
import Navigation from './Navigation';
import Profile from './Profile';

export default function Header() {
	return (
		<section className='h-[72px]'>
			<header className='w-full bg-navLayout flex justify-between py-4 px-8 fixed top-0 left-0'>
				<Logo />
				<Navigation />
				<Profile />
			</header>
		</section>
	);
}
