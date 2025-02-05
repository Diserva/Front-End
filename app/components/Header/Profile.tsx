'use server'

import {
	doHydrationListReqWithCreds,
	getUserHydrationList
} from '@/app/lib/axios/deffered/dashboard';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { ReactNode, Suspense } from 'react';
import { Balance, LogoutBtn, Username } from './Profile-client';
import { Avatar } from '@/components/ui/avatar';
import { MODAL_NAV_LINKS } from '@/app/lib/constants/header';
import { MODAL_LINK_TYPE } from '@/app/lib/definitions';
import { Link } from 'lucide-react';
import HydrateUserAtoms from '@/app/lib/providers/HydrateUserAtoms';

export default async function ProfileSection() {
	const hydrationDataList = await doHydrationListReqWithCreds(
		getUserHydrationList
	);

	return (
		<Suspense fallback={<div>loading...</div>}>
			<HydrateUserAtoms hydrationDataList={hydrationDataList}>
				<NavigationMenuItem>
					<DropdownMenu>
						<Profile />
						<Modal />
					</DropdownMenu>
				</NavigationMenuItem>
			</HydrateUserAtoms>
		</Suspense>
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
		<DropdownMenuContent
			sideOffset={30}
			alignOffset={-40}
			side='top'
			align='start'
			className='bg-modalGray bg-opacity-100 border-none px-3 py-[18px]'>
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

export async function ModalItem({ children }: { children: ReactNode }) {
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
