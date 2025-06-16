import { atom } from 'jotai';
import { AnyInput, SectionType, SettingsType } from '../axios/apiSchemas';

export const SETTINGS = atom<SettingsType>(); // This atom may only be once initiated with data, but mustn't be changed later
export const newServerSettingsAtom = atom<SettingsType>(); // this atom initiates with value of LAST_SERVER_SETTINGS_ATOM
export const sectionNameAtom = atom<string>();
export const currentSectionAtom = atom<SectionType | undefined>(get => {
	const settings = get(newServerSettingsAtom);
	const key = get(sectionNameAtom);
	if (key && settings) {
		return settings.find(setting => setting.name.toLowerCase() === key);
	}
});

export const inputsAtom = atom<Record<string, AnyInput>>();


export type SectionLink = {
	displayedName: string;
	searchParamsName: string;
};

export const sectionNamesListAtom = atom<SectionLink[]>(
	(get): SectionLink[] => {
		const serverSettings = get(LAST_SERVER_SETTINGS_ATOM) || [];
		return serverSettings.map(section => ({
			displayedName: section.name,
			searchParamsName: section.name.toLowerCase()
		}));
	}
);


