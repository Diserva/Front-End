import BottomUI from './Bottom';
import IconsUI from './Icons';
import Links from './Links';

export default function FooterUI() {
	return (
		<footer className='footer'>
			<section className='flex justify-between max-sm:flex-col max-sm:gap-5'>
				<IconsUI />
				<Links />
			</section>
			<BottomUI />
		</footer>
	);
}
