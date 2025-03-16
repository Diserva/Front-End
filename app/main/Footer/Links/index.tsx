import { FOOTER_NAV } from '../constants';
import { LinksUI } from './UI';

export default function Links() {
	const footerData = Object.entries(FOOTER_NAV);

	return <LinksUI footerData={footerData} />;
}
