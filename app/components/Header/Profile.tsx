'use client';

import { selectAuth } from '@/app/lib/redux/authSlice';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Login from './Login';

export default function Profile() {
	const authenicated = useSelector(selectAuth);

	return (
		<>
			{authenicated ? (
				<section className='flex gap-4 items-center'>
					<h3 className='text-white'>iconservator</h3>
					<Image src='/avatar.png' width={38} height={38} alt='some alt' />
				</section>
			) : (
				<Login />
			)}
		</>
	);
}
