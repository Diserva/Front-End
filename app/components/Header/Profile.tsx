'use client';

import { logout } from '@/app/lib/actions';
import { modalShownAtom, toggleModalShown } from '@/app/lib/jotai/headerAtom';
import { userAtom, userAvatarUrl } from '@/app/lib/jotai/userAtoms';
import clsx from 'clsx';
import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';

function Modal() {
	const onClick = useCallback(() => {
		logout();
	}, []);

	const modalShown = useAtomValue(modalShownAtom);

	return (
		<section className={clsx('hidden', { column: modalShown })}>
			<button
				className='px-4 py-2 bg-red-500 text-white border-rounded'
				onClick={onClick}>
				Log Out
			</button>
		</section>
	);
}
function Profile() {
	const user = useAtomValue(userAtom);
	const avatarUrl = useAtomValue(userAvatarUrl);
	const toggleNavShown = useCallback(useSetAtom(toggleModalShown), []);
	return (
		<section
			className='flex gap-4 items-center justify-center'
			onClick={toggleNavShown}>
			<h3 className='text-white'>{user?.username}</h3>

			{avatarUrl && (
				<img
					src={avatarUrl}
					className='w-9 h-9 rounded-full select-none'
					alt={`${user?.username}'s avatar`}
				/>
			)}
		</section>
	);
}
export default function ProfileSection() {
	return (
		<section className='column gap-3'>
			<Profile />
			<Modal />
		</section>
	);
}
