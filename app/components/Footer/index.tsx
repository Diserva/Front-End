import Bottom from './Bottom';
import Icons from './Icons';
import Links from './Links';

export default function Footer() {
	return (
		<footer className='footer'>
			<section className='between items-center max-sm:sm-foot'>
				<Icons />
				<Links />
			</section>
			<Bottom />
		</footer>
	);
}
