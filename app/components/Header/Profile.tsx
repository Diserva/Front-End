'use client';

import Image from 'next/image';

export default function Profile() {
	return (
		<section className='flex gap-4 items-center'>
			<h3 className='text-white'>iconservator</h3>
			<Image src='/avatar.png' width={38} height={38} alt='some alt' />
		</section>
	);
}
