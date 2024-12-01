import Bottom from './Bottom';
import Icons from './Icons';
import Links from './Links';

export default function Footer() {
	return (
		<footer className='flex flex-col gap-12 w-full p-8 bg-navLayout'>
			<section className='flex justify-between'>
				<Icons />
				<Links />
			</section>
			<Bottom />
		</footer>
	);
}
