import axios from 'axios';
import { json, validate } from './utils';
import { SettingsSchema } from './apiSchemas';

const postman = axios.create({
	baseURL: `${process.env.MOCK_SERVER_DEST}/get-server`
});

export const getSpecificServerSettingsOptions = (serverName: string) =>
	postman({
		method: 'GET',
		url: `/${serverName}`,
		transformResponse: json(validate(SettingsSchema))
	});
