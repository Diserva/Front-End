import type i18next from 'i18next';
import { createInstance, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from './i18nConfig';
import { AVAILABLE_LANGUAGES } from './lib/definitions';

export default async function initTranslations(
	locale: AVAILABLE_LANGUAGES,
	namespaces: string[],
	i18nInstance?: typeof i18next, // розібратися із типами
	resources?: Resource
) {
	i18nInstance = i18nInstance || createInstance();
	i18nInstance.use(initReactI18next);

	if (!resources) {
		i18nInstance.use(
			resourcesToBackend(
				(language: AVAILABLE_LANGUAGES, namespace: string) =>
					import(`@/locales/${language}/${namespace}.json`)
			)
		);
	}

	await i18nInstance.init({
		lng: locale,
		resources,
		fallbackLng: i18nConfig.defaultLocale,
		supportedLngs: i18nConfig.locales,
		defaultNS: namespaces[0],
		fallbackNS: namespaces[0],
		ns: namespaces,
		preload: resources ? [] : i18nConfig.locales
	});

	return {
		i18n: i18nInstance,
		resources: i18nInstance.services.resourceStore.data,
		t: i18nInstance.t
	};
}
