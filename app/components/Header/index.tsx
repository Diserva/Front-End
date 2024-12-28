import Burger from './Burger';
import Logo from './Logo';
import Navigation from './Navigation';
import ProfileSection from './Profile';

export default function Header() {
	return (
		<section className='h-header'>
			<header className='header'>
				<section className='flex gap-5 '>
					<Burger />
					<Logo />
				</section>
				<Navigation />
				<ProfileSection />
			</header>
		</section>
	);
}
