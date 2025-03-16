import axios from 'axios';
import { json, validate } from './utils';
import { SettingsSchema } from './apiSchemas';

const postman = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_POSTMAN}/manage-server`
});

export const getSpecificServerSettingsOptions = (serverName: string) =>
	postman({
		method: 'GET',
		url: `/${serverName}`,
		// transformResponse: json(validate(SettingsSchema))
	});
