import Link from 'next/link';
import initTranslations from '../i18n';

export default async function page({
	params: { locale }
}: {
	params: { locale: string };
}) {
	const { t } = await initTranslations(locale, ['home']);
	console.log({ locale, t });
	return (
		<div>
			{t('smth')} <Link href={'/some'}>click</Link>
		</div>
	);
}
