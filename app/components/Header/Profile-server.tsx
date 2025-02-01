import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { Avatar, Balance, LogoutBtn, Username } from './Profile-client';
import { MODAL_NAV_LINKS } from '@/app/lib/constants/header';
import { MODAL_LINK_TYPE } from '@/app/lib/definitions';
import Link from 'next/link';
import { ReactNode } from 'react';

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

function Modal() {
	return (
		<DropdownMenuContent sideOffset={30} alignOffset={-40} side='top' align="start" className='bg-modalGray bg-opacity-100 border-none px-3 py-[18px]'>
			<Balance />
			<IterateModalLinks />
			<LogoutBtn />
		</DropdownMenuContent>
	);
}

function IterateModalLinks() {
	return MODAL_NAV_LINKS.map(link => (
		<ModalLinkWithIcon key={link.label} {...link} />
	));
}

export function ModalItem({ children }: { children: ReactNode }) {
	return (
		<DropdownMenuItem
			asChild
			className='justify-start focus:bg-modalItemHover focus:border-none focus-visible:ring-0  w-full py-[10px]  !text-defaultText !shadow-none !px-2'>
			{children}
		</DropdownMenuItem>
	);
}

function ModalLinkWithIcon({ label, href, ComponentSVG }: MODAL_LINK_TYPE) {
	return (
		<ModalItem>
			<Link href={href}>
				<ComponentSVG />
				{label}
			</Link>
		</ModalItem>
	);
}
