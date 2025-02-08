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
import { AvatarSection, Balance, LogoutBtn, Username } from './Profile-client';
import { MODAL_NAV_LINKS } from '@/app/lib/constants/header';
import { MODAL_LINK_TYPE } from '@/app/lib/definitions';
import HydrateUserAtoms from '@/app/lib/providers/HydrateUserAtoms';
import Link from 'next/link';

export default async function ProfileSection() {
	const hydrationDataList = await doHydrationListReqWithCreds(
		getUserHydrationList
	);

	return (
		<NavigationMenuItem>
			<DropdownMenu>
				<HydrateUserAtoms hydrationDataList={hydrationDataList}>
					<Profile />
					<Modal />
				</HydrateUserAtoms>
			</DropdownMenu>
		</NavigationMenuItem>
	);
}

function Profile() {
	return (
		<DropdownMenuTrigger className='flex-center gap-2'>
			<Username />
			<AvatarSection />
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
	console.log({ MODAL_NAV_LINKS });
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
