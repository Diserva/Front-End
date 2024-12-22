'use client';

import { LINK_ICONS } from '@/app/lib/constants/footer';

export default function Icons() {
	return (
		<section className='grid grid-cols-3 gap-x-8 gap-y-4 h-fit'>
			{LINK_ICONS.map(({ Icon, href }) => (
				<a key={href} href={href}>
					<Icon className='w-8 h-8 text-icon hover:text-accent duration-200' />
				</a>
			))}
		</section>
	);
}
