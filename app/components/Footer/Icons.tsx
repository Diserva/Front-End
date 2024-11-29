'use client';

import { LINK_ICONS } from '@/app/lib/constants/footer';
import { IconContext } from 'react-icons';

export default function Icons() {
	return (
		<IconContext.Provider
			value={{
				className: 'w-8 h-8 text-icon hover:text-iconHovered duration-200'
			}}>
			<section className='grid grid-cols-3 gap-x-8 gap-y-4'>
				{LINK_ICONS.map(({ Icon, href }) => (
					<a key={href} href={href}>
						<Icon />
					</a>
				))}
			</section>
		</IconContext.Provider>
	);
}
