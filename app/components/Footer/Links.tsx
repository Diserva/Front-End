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
		<section
			role='list'
			className='flex flex-col text-[13px] gap-2 max-sm:justify-center max-sm:items-center'>
			{areExternalLinks
				? links.map(({ href, label }) => (
						<a key={label} href={href}>
							{label}
						</a>
				  ))
				: links.map(({ href, label }) => (
						<Link key={label} href={href}>
							{label}
						</Link>
				  ))}
		</section>
	);
}

export default function Links() {
	const footerData = Object.entries(FOOTER_NAV);

	return (
		<section className='footer-links'>
			{footerData.map(([label, columnData]) => {
				return (
					<section
						key={label}
						className='flex flex-col gap-4 w-fit max-sm:grid-cols-1 max-sm:justify-center max-sm:items-center'>
						<h3 className='text-white'>{label}</h3>
						<RenderLinksList {...columnData} />
					</section>
				);
			})}
		</section>
	);
}
