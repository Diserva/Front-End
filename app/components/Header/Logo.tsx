"use client"

import Image from 'next/image';
import { workSans } from '@/app/lib/fonts';
import clsx from 'clsx';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';


export default function LogoMenuItem() {

	return (
		<NavigationMenuItem>
			<Button asChild variant="link">
				<Link href="/main" className='between gap-2 items-center'>
					<Image src={'/Logo.png'} width={32} height={32} alt='Logo'/>
					<span
						className={clsx(workSans.className, 'text-2xl text-white font-medium')}>
						CEAVEX
					</span>
				</Link>
			</Button>
		</NavigationMenuItem>
	);
}
