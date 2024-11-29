import Icons from './Icons';
import Links from './Links';

export default function Footer() {
	return (
		<footer className='flex justify-between w-full p-32 bg-navLayout'>
			<Icons />
			<Links />
		</footer>
	);
}
