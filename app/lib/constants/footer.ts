import {
	FaDiscord,
	FaGithub,
	FaInstagram,
	FaTelegram,
	FaThreads,
	FaXTwitter
} from 'react-icons/fa6';
import type { FOOTER_NAVIGATIION, ICON_LINK } from '../definitions';

type FOOTER_LINK_ICON = ICON_LINK & {
	hoverColor: string;
};

export const LINK_ICONS: FOOTER_LINK_ICON[] = [
	{
		Icon: FaTelegram,
		href: '1',
		hoverColor: 'telegram'
	},
	{
		Icon: FaGithub,
		href: '2',
		hoverColor: 'github'
	},
	{
		Icon: FaDiscord,
		href: '3',
		hoverColor: "discord"
	},
	{
		Icon: FaThreads,
		href: '4',
		hoverColor: "threads"
	},
	{
		Icon: FaXTwitter,
		href: '5',
		hoverColor: "twitter"
	},
	{
		Icon: FaInstagram,
		href: '6',
		hoverColor: "instagram"
	}
];

export const FOOTER_NAV: FOOTER_NAVIGATIION = {
	Головне: {
		areExternalLinks: false,
		links: [
			{
				label: 'Про Нас',
				href: "doesn't exist yet"
			},
			{
				label: 'Про Нас 2',
				href: "doesn't exist yet"
			}
		]
	},
	Партнери: {
		areExternalLinks: true,
		links: [
			{
				label: 'Family Play',
				href: "doesn't exist yet"
			},
			{
				label: 'Strategy World',
				href: "doesn't exist yet"
			}
		]
	},
	Довідник: {
		areExternalLinks: false,
		links: [
			{
				label: 'Умови Користування',
				href: "doesn't exist yet"
			},
			{
				label: 'Політика конфіденційності',
				href: "doesn't exist yet"
			},
			{
				label: 'Cookies',
				href: "doesn't exist yet"
			}
		]
	},
	Розробники: {
		areExternalLinks: true,
		links: [
			{
				label: 'iconservator',
				href: "doesn't exist yet"
			},
			{
				label: 'Viva',
				href: "doesn't exist yet"
			},
			{
				label: 'chyVacheck',
				href: "doesn't exist yet"
			},
			{
				label: 'Danya',
				href: "doesn't exist yet"
			}
		]
	}
};
