'use client';

import { selectUser, selectUserOutcoming } from '@/app/lib/redux/userSlice';
import { useSelector } from 'react-redux';

export default function Profile() {
	const { username } = useSelector(selectUser);
	const { avatarUrl } = useSelector(selectUserOutcoming);

	return (
		<section className='flex gap-4 items-center'>
			<h3 className='text-white'>{username}</h3>

			{avatarUrl && (
				<img
					src={avatarUrl}
					className='w-9 h-9 rounded-full'
					alt={`${username}'s avatar`}
				/>
			)}
		</section>
	);
}
