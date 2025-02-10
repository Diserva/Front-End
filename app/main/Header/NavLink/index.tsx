'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLinkUI from './UI';

export default function NavLink({
	href,
	label
}: {
	href: string;
	label: string;
}) {
	const pathname = usePathname();
	const isCurrentPage = pathname === href;

	return <NavLinkUI href={href} label={label} isCurrentPage={isCurrentPage} />;
}
