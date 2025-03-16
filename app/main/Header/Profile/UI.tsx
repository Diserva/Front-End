import { MODAL_NAV_LINKS } from '@/app/lib/constants/header';
import { MODAL_LINK_TYPE } from '@/app/lib/definitions';
import { UserType } from '@/app/lib/axios/apiSchemas';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import LogOutSVG from '@/app/main/Footer/Icons/svgIcons/LogOutSVG';
import { logout } from '@/app/lib/actions';
import Link from 'next/link';
import { AvatarSection, Balance, Username } from './client';
import { ReactNode } from 'react';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';

export function UsernameUI({ user }: { user: UserType | undefined }) {
	return <h3 className='text-white select-none'>{user?.username}</h3>;
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

export function AvatarSectionUI({
	avatarUrl
}: {
	avatarUrl: string | undefined;
}) {
	return (
		<Avatar>
			<AvatarImage src={avatarUrl} alt="user's avatar" />
			<AvatarFallback className=' flex-center rounded-full bg-muted bg-blue-500' />
		</Avatar>
	);
}

export function BalanceUI({
	turnRedIfBalanceEmpty
}: {
	turnRedIfBalanceEmpty: boolean;
}) {
	return (
		<ModalItem>
			<Button
				className='flex justify-between bg-modalItemHover focus:bg-mainBg !text-white mb-2'
				variant='ghost'>
				<h2>Баланс:</h2>
				<p className={clsx({ '!text-red': turnRedIfBalanceEmpty })}>0 грн</p>
			</Button>
		</ModalItem>
	);
}

export function LogoutBtnUI() {
	return (
		<ModalItem>
			<Button
				variant='destructive'
				onClick={logout}
				className='bg-specialModalItemHover group focus:!bg-[#DA373C] hover:!bg-[#DA373C] focus-visible:ring-0'>
				<LogOutSVG />
				<span className='group-focus:text-white group-hover:text-white'>Вийти</span>
			</Button>
		</ModalItem>
	);
}

export function ProfileSectionUI() {
	return (
		<NavigationMenuItem>
			<DropdownMenu modal={false}>
				<ProfileUI />
				<ModalUI />
			</DropdownMenu>
		</NavigationMenuItem>
	);
}

export function ProfileUI() {
	return (
		<DropdownMenuTrigger className='flex-center gap-2'>
			<Username />
			<AvatarSection />
		</DropdownMenuTrigger>
	);
}

export function ModalUI() {
	return (
		<DropdownMenuContent
			sideOffset={30}
			alignOffset={-40}
			side='top'
			align='start'
			className='bg-modalGray bg-opacity-100 border-none px-3 py-[18px]'>
			<Balance />
			<IterateModalLinks />
			<LogoutBtnUI />
		</DropdownMenuContent>
	);
}

export function ModalLinkWithIcon({
	label,
	href,
	ComponentSVG
}: MODAL_LINK_TYPE) {
	return (
		<ModalItem>
			<Link href={href}>
				<ComponentSVG />
				{label}
			</Link>
		</ModalItem>
	);
}

export function IterateModalLinks() {
	return MODAL_NAV_LINKS.map(link => (
		<ModalLinkWithIcon key={link.label} {...link} />
	));
}
