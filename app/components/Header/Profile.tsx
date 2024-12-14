'use client';

import { selectUser } from '@/app/lib/redux/CreateUserStore';
import { useSelector } from 'react-redux';

export default function Profile() {
	const { user, userOutcoming } = useSelector(selectUser);
	const avatar = userOutcoming.avatarUrl;
	console.log({ user });

	return (
		<section className='flex gap-4 items-center'>
			<h3 className='text-white'>{user.username}</h3>

			{avatar && (
				<img
					src={avatar}
					className='w-9 h-9 rounded-full'
					alt={`${user.username}'s avatar`}
				/>
			)}
		</section>
	);
}
