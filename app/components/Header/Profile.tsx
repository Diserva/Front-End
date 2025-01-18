'use client';

import { logout } from '@/app/lib/actions';
import { modalShownAtom, toggleModalShown } from '@/app/lib/jotai/headerAtom';
import { userAtom, userAvatarUrl } from '@/app/lib/jotai/userAtoms';
import { AvatarImage } from '@/components/ui/avatar';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import clsx from 'clsx';
import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';


export default function ProfileSection() {
	return (
		<section className='column gap-3'>
			<Profile />
			<Modal />
		</section>
	);
}


function Modal() {

	const modalShown = useAtomValue(modalShownAtom);

	return (
		<section className={clsx('hidden', { column: modalShown })}>
			<button
				className='px-4 py-2 bg-red-500 text-white border-rounded'
				onClick={logout}>
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

			<Avatar className='some-classname'>
				<AvatarImage src={avatarUrl} alt="user's avatar" />
				<AvatarFallback className=' flex-center !w-10 !h-10 rounded-full bg-muted bg-blue-500' />
			</Avatar>
		</section>
	);
}
