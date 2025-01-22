import { LINK, MODAL_LINK_TYPE } from '../definitions';
import SettingsSVG from './svgIcons/SettingsSVG';
import HelpSVG from './svgIcons/HelpSVG';

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
		ComponentSVG: SettingsSVG
	},
	{
		label: 'Допомога',
		href: '/help',
		ComponentSVG: HelpSVG
	}
];
