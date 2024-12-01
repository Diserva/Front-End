import {
	FaDiscord,
	FaGithub,
	FaInstagram,
	FaTelegram,
	FaThreads,
	FaXTwitter
} from 'react-icons/fa6';
import type { FOOTER_NAVIGATIION, ICON_LINK } from '../definitions';

export const LINK_ICONS: ICON_LINK[] = [
	{
		Icon: FaTelegram,
		href: '1'
	},
	{
		Icon: FaGithub,
		href: '2'
	},
	{
		Icon: FaDiscord,
		href: '3'
	},
	{
		Icon: FaThreads,
		href: '4'
	},
	{
		Icon: FaXTwitter,
		href: '5'
	},
	{
		Icon: FaInstagram,
		href: '6'
	}
];

export const FOOTER_NAV: FOOTER_NAVIGATIION = {
	Головне: {
		areExternalLinks: false,
		links: [
			{
				tKey: 'Про Нас',
				href: "doesn't exist yet"
			},
			{
				tKey: 'Про Нас 2',
				href: "doesn't exist yet"
			}
		]
	},
	Партнери: {
		areExternalLinks: true,
		links: [
			{
				tKey: 'Family Play',
				href: "doesn't exist yet"
			},
			{
				tKey: 'Strategy World',
				href: "doesn't exist yet"
			}
		]
	},
	Довідник: {
		areExternalLinks: false,
		links: [
			{
				tKey: 'Умови Користування',
				href: "doesn't exist yet"
			},
			{
				tKey: 'Політика конфіденційності',
				href: "doesn't exist yet"
			},
			{
				tKey: 'Cookies',
				href: "doesn't exist yet"
			}
		]
	},
	Розробники: {
		areExternalLinks: true,
		links: [
			{
				tKey: 'iconservator',
				href: "doesn't exist yet"
			},
			{
				tKey: 'Viva',
				href: "doesn't exist yet"
			},
			{
				tKey: 'chyVacheck',
				href: "doesn't exist yet"
			},
			{
				tKey: 'Danya',
				href: "doesn't exist yet"
			}
		]
	}
};
