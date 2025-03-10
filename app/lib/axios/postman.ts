import axios from 'axios';

const postman = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_POSTMAN}/get-server/`
});

export const getSpecificServerSettingsOptions = (serverName: string) =>
	postman({
		method: 'GET',
		url: `/${serverName}`
	});
