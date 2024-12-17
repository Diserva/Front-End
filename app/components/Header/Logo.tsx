"use client"

import Image from 'next/image';
import { workSans } from '@/app/lib/fonts';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { userAtom } from '@/app/lib/jotai/userAtoms';

export default function Logo() {
	const [user] = useAtom(userAtom);

	console.log({ user });

	return (
		<section className='flex gap-5 items-center'>
			<Image src={'/Logo.png'} width={32} height={32} alt='Logo' />
			<span
				className={clsx(workSans.className, 'text-2xl text-white font-medium')}>
				CEAVEX
			</span>
		</section>
	);
}
