import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export default function NavLinkUI({
	href,
	label,
	isCurrentPage
}: {
	href: string;
	label: string;
	isCurrentPage: boolean;
}) {
	return (
		<Button asChild variant='link'>
			<Link href={href} className={clsx({ 'text-white': isCurrentPage })}>
				{label}
			</Link>
		</Button>
	);
}
