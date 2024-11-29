import Logo from './Logo';
import Navigation from './Navigation';
import Profile from './Profile';

export default function Header() {
	return (
		<header className='w-full bg-navLayout flex justify-between py-4 px-8'>
			<Logo />
			<Navigation />
			<Profile />
		</header>
	);
}
