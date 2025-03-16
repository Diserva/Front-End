import SettingsSVG from '../Footer/Icons/svgIcons/SettingsSVG';
import HelpSVG from '../Footer/Icons/svgIcons/HelpSVG';
import DashboardSVG from '../Footer/Icons/svgIcons/DashboardSVG';
import InfoSVG from '../Footer/Icons/svgIcons/InfoSVG';
import StickyNoteSVG from '../Footer/Icons/svgIcons/StickyNoteSVG';
import { LINK, MODAL_LINK_TYPE } from '@/app/lib/definitions';

export const MAIN_NAV_LINKS: LINK[] = [
	{
		label: 'Керувати серверами',
		href: '/main/dashboard'
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
		href: '/main/dasboard',
		ComponentSVG: DashboardSVG
	},
	{
		label: 'Блог',
		href: '/blog/',
		ComponentSVG: StickyNoteSVG
	},
	{
		label: 'Про нас',
		href: '/about-us',
		ComponentSVG: InfoSVG
	},
	{
		label: 'Налаштування',
		href: '/main/settings',
		ComponentSVG: SettingsSVG
	},
	{
		label: 'Допомога',
		href: '/help',
		ComponentSVG: HelpSVG
	}
];
