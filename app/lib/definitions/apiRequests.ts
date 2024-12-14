import { z } from 'zod';

export const bodySchema = z.object({
	client_id: z.string(),
	client_secret: z.string(),
	grant_type: z.literal('authorization_code'),
	code: z.string(),
	redirect_uri: z.string(),
	scope: z.literal('identify+guilds')
});

export const TokenSchema = z.object({
	access_token: z.string(),
	expires_in: z.number(),
	refresh_token: z.string(),
	scope: z.string(),
	token_type: z.string()
});

export const UserSchema = z.object({
	avatar: z.string(),
	discordId: z.string(),
	globalName: z.string(),
	locale: z.string(),
	permission: z.string(),
	username: z.string()
});

export const GuildsSchema = z.array(
	z.object({
		id: z.string(),
		name: z.string(),
		icon: z.string().nullable(),
		banner: z.string().nullable(),
		permissions: z.number(),
		approximate_member_count: z.number(),
		isBot: z.boolean()
	})
);

export type TokenType = z.infer<typeof TokenSchema>;
export type UserType = z.infer<typeof UserSchema>;
export type GuildsType = z.infer<typeof GuildsSchema>;
