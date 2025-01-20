export * from './footer';

import { IconType } from 'react-icons';

export type LINK = {
	label: string;
	href: string;
};

export type ICON_LINK = {
	Icon: IconType;
	href: string;
};

export type MODAL_LINK_TYPE = LINK & {
	Icon: IconType;
};
