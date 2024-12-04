import { z } from 'zod';

export const bodySchema = z.object({
	client_id: z.string(),
	client_secret: z.string(),
	grant_type: z.literal('authorization_code'),
	code: z.string(),
	redirect_uri: z.string(),
	scope: z.literal('identify+guilds')
});

export const getTokenResult = z.object({
	access_token: z.string(),
	expires_in: z.number(),
	refresh_token: z.string(),
	scope: z.string(),
	token_type: z.string()
});

export type getTokenResultType = z.infer<typeof getTokenResult>;
