"use client"

import { AVAILABLE_LANGUAGES } from '../definitions';
import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance, Resource } from 'i18next';
import { ReactNode } from 'react';

export default function TranslationsProvider({
	children,
	locale,
	namespaces,
	resources
}: {
	children: ReactNode;
	locale: AVAILABLE_LANGUAGES;
	namespaces: string[];
	resources?: Resource;
}) {
	const i18n = createInstance();

	initTranslations(locale, namespaces, i18n, resources);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
