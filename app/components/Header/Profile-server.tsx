import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { Avatar, LogoutBtn, Username } from './Profile-client';
import { MODAL_NAV_LINKS } from '@/app/lib/constants/header';
import { MODAL_LINK_TYPE } from '@/app/lib/definitions';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
		<DropdownMenuContent className='bg-modalGray bg-opacity-100 border-none px-3'>
			<IterateModalLinks />
			<LogoutBtn />
		</DropdownMenuContent>
	);
}

function IterateModalLinks() {
	return (
		<DropdownMenuGroup className='p-0 flex flex-col items-start'>
			{MODAL_NAV_LINKS.map(link => (
				<ModalLinkWithIcon key={link.label} {...link} />
			))}
		</DropdownMenuGroup>
	);
}

function ModalLinkWithIcon({ label, href, Icon }: MODAL_LINK_TYPE) {
	return (
		<DropdownMenuItem asChild>
			<Button asChild className='bg-transparent'>
				<Link href={href} className='!text-defaultText !shadow-none !px-2'>
					<Icon />
					{label}
				</Link>
			</Button>
		</DropdownMenuItem>
	);
}
