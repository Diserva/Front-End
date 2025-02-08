import Link from 'next/link';

export default function Bottom() {
	return (
		<section className='w-full between border-t border-white h-12 items-end max-sm:sm-foot'>
			<h4>© 2024 - 2024 Diserva All rights reserved.</h4>
			<h4>
				You have any problems, our
				<Link href='/' className='text-accent'>
					support
				</Link>
				can help you
			</h4>
		</section>
	);
}
