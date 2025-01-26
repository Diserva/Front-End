import { LINK, MODAL_LINK_TYPE } from '../definitions';
import SettingsSVG from './svgIcons/SettingsSVG';
import HelpSVG from './svgIcons/HelpSVG';
import DashboardSVG from './svgIcons/DashboardSVG';
import InfoSVG from './svgIcons/InfoSVG';
import StickyNoteSVG from './svgIcons/StickyNoteSVG';

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
		label: 'Керувати серверами',
		href: '/main/',
		ComponentSVG: DashboardSVG
	},
	{
		label: 'Блог',
		href: '/blog',
		ComponentSVG: StickyNoteSVG
	},
	{
		label: 'Про нас',
		href: '/about-us',
		ComponentSVG: InfoSVG
	},
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
