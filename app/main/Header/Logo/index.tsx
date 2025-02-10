import { workSans } from '@/app/lib/fonts';
import { Button } from '@/components/ui/button';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function LogoMenuItemUI() {
	return (
		<NavigationMenuItem>
			<Button asChild variant='link'>
				<Link href='/main' className='flex justify-between gap-2 items-center'>
					<Image src={'/Logo.png'} width={32} height={32} alt='Logo' />
					<span
						className={clsx(
							workSans.className,
							'text-2xl text-white font-medium'
						)}>
						CEAVEX
					</span>
				</Link>
			</Button>
		</NavigationMenuItem>
	);
}
