'use client';

import { userAtom, userAvatarUrl } from '@/app/lib/jotai/userAtoms';
import { useAtomValue } from 'jotai';

export default function Profile() {
	const user = useAtomValue(userAtom);
	const avatarUrl = useAtomValue(userAvatarUrl);

	return (
		<section className='flex gap-4 items-center'>
			<h3 className='text-white'>{user?.username}</h3>

			{avatarUrl && (
				<img
					src={avatarUrl}
					className='w-9 h-9 rounded-full'
					alt={`${user?.username}'s avatar`}
				/>
			)}
		</section>
	);
}
