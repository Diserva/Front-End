import Image from 'next/image';
import { workSans } from '@/app/lib/fonts';
import clsx from 'clsx';

export default function Logo() {
	return (
		<div className='flex justify-between max-w-40 '>
			<Image src={'./Logo.png'} width={32} height={32} alt='Logo' />
			<span
				className={clsx(workSans.className, 'text-2xl text-white font-medium')}>
				CEAVEX
			</span>
		</div>
	);
}
