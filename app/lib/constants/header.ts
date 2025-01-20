import { LINK, MODAL_LINK_TYPE } from '../definitions';
import { TbSettingsSpark } from 'react-icons/tb';
import { MdOutlineHelp } from 'react-icons/md';

export const MAIN_NAV_LINKS: LINK[] = [
	{
		label: 'Керувати серверами',
		href: '/main/'
	},
	{
		label: 'Блог',
		href: '/blog'
	},
	{
		label: 'Про нас',
		href: '/about-us'
	}
];

export const MODAL_NAV_LINKS: MODAL_LINK_TYPE[] = [
	{
		label: 'Налаштування',
		href: '/settings',
		Icon: TbSettingsSpark
	},
	{
		label: 'Допомога',
		href: '/help',
		Icon: MdOutlineHelp
	}
];
