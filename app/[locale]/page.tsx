import Link from 'next/link';
import initTranslations from '../i18n';
import { AVAILABLE_LANGUAGES } from '../lib/definitions';
import { Resource } from 'i18next';

export default async function page({
	params
}: {
	params: { locale: AVAILABLE_LANGUAGES };
}) {
	const { locale } = params;
	const { t } = await initTranslations(locale, ['home']);

	return (
		<div>
			<Link href={'/some/some'}>click</Link>
		</div>
	);
}
