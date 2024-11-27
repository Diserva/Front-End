import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from './i18nConfig';
import { AVAILABLE_LANGUAGES } from './lib/definitions';

export default async function initTranslations(
	locale: string,
	namespaces,
	i18nInstance, // розібратися із типами
	resources
) {
	i18nInstance = i18nInstance || createInstance();
	i18nInstance.use(initReactI18next);

	console.log(i18nInstance);

	if (!resources) {
		i18nInstance.use(
			resourcesToBackend(
				(language, namespace) =>
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
