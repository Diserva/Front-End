'use client';

import { logout } from '@/app/lib/actions';
import { userAtom, userAvatarUrl } from '@/app/lib/jotai/userAtoms';
import {
	Avatar as AvatarContainer,
	AvatarFallback,
	AvatarImage
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenuGroup } from '@/components/ui/dropdown-menu';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useAtomValue } from 'jotai';
import { ModalItem } from './Profile-server';

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
	return (
		<ModalItem>
			<Button className='flex justify-between text-white' variant={"ghost"}>
				<h2>Баланс:</h2>
				<p>0 грн</p>
			</Button>
		</ModalItem>
	);
}

export function LogoutBtn() {
	return (
		<ModalItem>
			<Button variant='destructive' onClick={logout} className='bg-transparent'>
				Log out
			</Button>
		</ModalItem>
	);
}

export function BalanceSection() {}
