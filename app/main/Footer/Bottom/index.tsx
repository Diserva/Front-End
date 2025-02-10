import Link from 'next/link';

export default function BottomUI() {
	return (
		<section className='w-full  border-t border-white h-12 items-end max-sm:gap-5 max-sm:flex-col'>
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
