'use client';

import { logout } from '@/app/lib/actions';
import { userAtom, userAvatarUrl } from '@/app/lib/jotai/userAtoms';
import {
	Avatar as AvatarContainer,
	AvatarFallback,
	AvatarImage
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAtomValue } from 'jotai';
import clsx from 'clsx';
import { useState } from 'react';
import LogOutSVG from '@/app/lib/constants/svgIcons/LogOutSVG';
import { ModalItem } from './Profile';

export function Username() {
	const user = useAtomValue(userAtom);

	return <h3 className='text-white'>{user?.username}</h3>;
}

export function Avatar() {
	const avatarUrl = useAtomValue(userAvatarUrl);

	return (
		<AvatarContainer className='some-classname'>
			<AvatarImage src={avatarUrl} alt="user's avatar" />
			<AvatarFallback className=' flex-center !w-10 !h-10 rounded-full bg-muted bg-blue-500' />
		</AvatarContainer>
	);
}

export function Balance() {
	const [balance] = useState(0);
	const turnRedIf = balance === 0;

	return (
		<ModalItem>
			<Button
				className='flex justify-between bg-modalItemHover focus:bg-mainBg !text-white'
				variant='ghost'>
				<h2>Баланс:</h2>
				<p className={clsx({ '!text-red': turnRedIf })}>0 грн</p>
			</Button>
		</ModalItem>
	);
}

export function LogoutBtn() {
	return (
		<ModalItem>
			<Button variant='destructive' onClick={logout} className='bg-specialModalItemHover group focus:bg-[#DA373C] '>
				<LogOutSVG />
				<span className='group-focus:text-white'>Вийти</span>
			</Button>
		</ModalItem>
	);
}

