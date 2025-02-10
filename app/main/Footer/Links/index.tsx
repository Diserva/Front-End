import { FOOTER_NAV } from '@/app/lib/constants/footer';
import { LinksUI } from './UI';

export default function Links() {
	const footerData = Object.entries(FOOTER_NAV);

	return <LinksUI footerData={footerData} />;
}
