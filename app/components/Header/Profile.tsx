'use client';

import { logout } from '@/app/lib/actions';
import { userAtom, userAvatarUrl } from '@/app/lib/jotai/userAtoms';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenuGroup } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import { useAtomValue } from 'jotai';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function ProfileSection() {
	return (
		<NavigationMenuItem>
			<DropdownMenu>
				<SidebarTrigger>
					<Profile />
				</SidebarTrigger>
				<Modal />
			</DropdownMenu>
		</NavigationMenuItem>
	);
}

function Profile() {
	const user = useAtomValue(userAtom);
	const avatarUrl = useAtomValue(userAvatarUrl);
	return (
		<DropdownMenuTrigger className='flex-center gap-2'>
			<h3 className='text-white'>{user?.username}</h3>

			<Avatar className='some-classname'>
				<AvatarImage src={avatarUrl} alt="user's avatar" />
				<AvatarFallback className=' flex-center !w-10 !h-10 rounded-full bg-muted bg-blue-500' />
			</Avatar>
		</DropdownMenuTrigger>
	);
}

function Modal() {
	return (
		<DropdownMenuContent>
			<DropdownMenuGroup>
				<DropdownMenuItem>1232134324324</DropdownMenuItem>
				<DropdownMenuItem>1232134324324</DropdownMenuItem>
				<DropdownMenuItem>1232134324324</DropdownMenuItem>
				<DropdownMenuItem>1232134324324</DropdownMenuItem>
			</DropdownMenuGroup>

			<LogoutBtn />
		</DropdownMenuContent>
	);
}

function LogoutBtn() {
	return (
		<DropdownMenuItem>
			<Button variant='destructive' onClick={logout}>
				Log out
			</Button>
		</DropdownMenuItem>
	);
}
