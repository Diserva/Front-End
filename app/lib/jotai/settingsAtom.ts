import { atom } from 'jotai';
import { SettingsType } from '../axios/apiSchemas';
import { isEqual } from 'underscore';

export const LAST_SERVER_SETTINGS_ATOM = atom<SettingsType>(); // This atom may only be once initiated with data, but mustn't be changed later
export const newServerSettingsAtom = atom<SettingsType>(); // this atom initiates with value of LAST_SERVER_SETTINGS_ATOM

export const isChangedAtom = atom<boolean>(get =>
	isEqual(get(LAST_SERVER_SETTINGS_ATOM), get(newServerSettingsAtom))
);
