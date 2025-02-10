import { LINK_ICONS } from '@/app/lib/constants/footer';

export default function IconsUI() {
	return (
		<section className='grid grid-cols-3 gap-x-8 gap-y-4 h-fit'>
			{LINK_ICONS.map(({ Icon, href, hoverColor }) => (
				<a key={href} href={href}>
					<Icon
						className={`w-8 h-8 text-icon duration-200 hover:text-footIcon-${hoverColor}`}
					/>
				</a>
			))}
		</section>
	);
}
