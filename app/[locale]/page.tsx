import Link from 'next/link';
import initTranslations from '../i18n';
import { AVAILABLE_LANGUAGES } from '../lib/definitions';

export default async function page({
	params: { locale }
}: {
	params: { locale: AVAILABLE_LANGUAGES };
}) {
	const { t } = await initTranslations(locale, ['home']);
	
	return (
		<div>
			{t('smth')} <Link href={'/some'}>click</Link>
		</div>
	);
}
