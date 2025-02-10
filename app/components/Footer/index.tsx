import Bottom from './Bottom';
import Icons from './Icons';
import Links from './Links';

export default function Footer() {
	return (
		<footer className='footer'>
			<section className='flex justify-between max-sm:flex-col max-sm:gap-5'>
				<Icons />
				<Links />
			</section>
			<Bottom />
		</footer>
	);
}
