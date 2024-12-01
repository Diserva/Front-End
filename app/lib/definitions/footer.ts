import { LINK } from '.';

type T_COLUMN_LABEL = string;
type COLUMN_LINKS = {
	areExternalLinks: boolean;
	links: LINK[];
};

export type FOOTER_NAVIGATIION = Record<T_COLUMN_LABEL, COLUMN_LINKS>;
