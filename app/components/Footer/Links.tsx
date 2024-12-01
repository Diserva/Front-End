import { FOOTER_NAV } from '@/app/lib/constants/footer';
import { LINK } from '@/app/lib/definitions';
import Link from 'next/link';

function RenderLinksList({
	links,
	areExternalLinks
}: {
	links: LINK[];
	areExternalLinks: boolean;
}) {
	return (
		// Нажаль, ця абстракція для двох типів лінків призвела до невеликого повторення коду, але це найкраще, що я зміг придувати
		<section role='list' className='flex flex-col text-xs gap-2'>
			{areExternalLinks
				? links.map(({ href, tKey }) => (
						<a key={tKey} href={href}>
							{tKey}
						</a>
				  ))
				: links.map(({ href, tKey }) => (
						<Link key={tKey} href={href}>
							{tKey}
						</Link>
				  ))}
		</section>
	);
}

export default function Links() {
	const footerData = Object.entries(FOOTER_NAV);

	return (
		<section className='grid grid-cols-4 gap-12'>
			{footerData.map(([tColumnLabel, columnData]) => {
				return (
					<section key={tColumnLabel} className='flex flex-col gap-4'>
						<h3>{tColumnLabel}</h3>
						<RenderLinksList {...columnData} />
					</section>
				);
			})}
		</section>
	);
}
