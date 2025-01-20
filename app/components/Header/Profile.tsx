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
// import {
// 	Avatar as AvatarContainer,
// 	AvatarFallback
// } from '@radix-ui/react-avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useAtomValue } from 'jotai';
import { MODAL_NAV_LINKS } from '@/app/lib/constants/header';
import Link from 'next/link';
import { MODAL_LINK_TYPE } from '@/app/lib/definitions';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';

export default function ProfileSection() {
	return (
		<NavigationMenuItem>
			<DropdownMenu>
				<Profile />
				<Modal />
			</DropdownMenu>
		</NavigationMenuItem>
	);
}

function Profile() {
	return (
		<DropdownMenuTrigger className='flex-center gap-2'>
			<Username />
			<Avatar />
		</DropdownMenuTrigger>
	);
}

function Username() {
	const user = useAtomValue(userAtom);

	return <h3 className='text-white'>{user?.username}</h3>;
}

function Avatar() {
	const avatarUrl = useAtomValue(userAvatarUrl);

	return (
		<AvatarContainer className='some-classname'>
			<AvatarImage src={avatarUrl} alt="user's avatar" />
			<AvatarFallback className=' flex-center !w-10 !h-10 rounded-full bg-muted bg-blue-500' />
		</AvatarContainer>
	);
}

function Modal() {
	return (
		<DropdownMenuContent className='bg-modalGray'>
			<IterateModalLinks />
			<LogoutBtn />
		</DropdownMenuContent>
	);
}

function IterateModalLinks() {
	return (
		<DropdownMenuGroup>
			{MODAL_NAV_LINKS.map(link => (
				<ModalLinkWithIcon key={link.label} {...link} />
			))}
		</DropdownMenuGroup>
	);
}

function ModalLinkWithIcon({ label, href, Icon }: MODAL_LINK_TYPE) {
	return (
		<DropdownMenuItem>
			<Button asChild>
				<Link href={href} className='!text-defaultText'>
					<Icon />
					{label}
				</Link>
			</Button>
		</DropdownMenuItem>
	);
}

function LogoutBtn() {
	return (
		<DropdownMenuGroup>
			<DropdownMenuItem>
				<Button variant='destructive' onClick={logout}>
					Log out
				</Button>
			</DropdownMenuItem>
		</DropdownMenuGroup>
	);
}
