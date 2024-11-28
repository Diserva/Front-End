import type i18next from 'i18next';
import { createInstance, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from './i18nConfig';
import { AVAILABLE_LANGUAGES } from './lib/definitions';

export default async function initTranslations(
	locale: AVAILABLE_LANGUAGES,
	namespaces: string[],
	i18n: typeof i18next,
	resources?: Resource
) {
	i18n = i18n || createInstance();
	i18n.use(initReactI18next);

	if (!resources) {
		i18n.use(
			resourcesToBackend(
				(language: AVAILABLE_LANGUAGES, namespace: string) =>
					import(`@/locales/${language}/${namespace}.json`)
			)
		);
	}

	await i18n.init({
		lng: locale,
		resources,
		fallbackLng: i18nConfig.defaultLocale,
		supportedLngs: i18nConfig.locales,
		defaultNS: namespaces[0],
		fallbackNS: namespaces[0],
		ns: namespaces,
		preload: resources ? [] : i18nConfig.locales
	});

	return i18n;
}
