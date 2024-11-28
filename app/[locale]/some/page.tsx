'use client';

import TranslationsProvider from '@/app/lib/providers/TranslationsProvider';
import { useTranslation } from 'react-i18next';

const Smth = () => {
	const { t } = useTranslation('home');

	return <div>{t(['smth'])}</div>;
};

export default function somePath() {
	return (
		<TranslationsProvider locale='uk' namespaces={['home']}>
			<Smth />
		</TranslationsProvider>
	);
}
