import { z } from 'zod';

// AUTHORIZATION

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
	avatar: z.string().nullable(),
	discordId: z.string(),
	globalName: z.string(),
	locale: z.string(),
	permission: z.string(),
	username: z.string()
});

export const GuildShema = z.object({
	id: z.string(),
	name: z.string(),
	icon: z.string().nullable(),
	banner: z.string().nullable(),
	permissions: z.number(),
	approximate_member_count: z.number(),
	isBot: z.boolean()
});

// MANAGE-SECTIONS

const ElemSelectSchema = z.object({
	type: z.literal('Select'),
	name: z.string(),
	defaultOption: z.string(),
	options: z.array(z.string())
});

const ElemCheckboxSchema = z.object({
	type: z.literal('Checkbox'),
	isCheckedByDefault: z.boolean(),
	description: z.string()
});

const ElemTextInputSchema = z.object({
	type: z.literal('TextInput'),
	name: z.string(),
	extandable: z.boolean(),
	placeholder: z.string(),
	defaultText: z.string()
});

const allElementsSchema = z.union([
	ElemSelectSchema,
	ElemCheckboxSchema,
	ElemTextInputSchema
]);

const ContainerCol2Schema = z.object({
	type: z.literal('Container2'),
	children: z.union([allElementsSchema, allElementsSchema.array()])
});

const AnyContent = z.union([allElementsSchema, ContainerCol2Schema]);

const MainContainerSchema = z.object({
	type: z.literal('ContainerMain'),
	name: z.string(),
	removeable: z.boolean(),
	children: z.union([AnyContent, AnyContent.array()])
});

const SectionSchema = z.object({
	name: z.string(),
	children: z.union([MainContainerSchema, MainContainerSchema.array()])
});

export const SettingsSchema = z.array(SectionSchema);

export const GuildsSchema = z.array(GuildShema);
export type TokenType = z.infer<typeof TokenSchema>;
export type UserType = z.infer<typeof UserSchema>;
export type GuildsType = z.infer<typeof GuildsSchema>;
export type GuildType = z.infer<typeof GuildShema>;

export type SettingsType = z.infer<typeof SettingsSchema>;
export type ElSelectArgs = z.infer<typeof ElemSelectSchema>;
export type ElCheckboxArgs = z.infer<typeof ElemCheckboxSchema>;
export type ElTextInputArgs = z.infer<typeof ElemTextInputSchema>;
export type ElMainContArgs = z.infer<typeof MainContainerSchema>;
export type ElContCol2Args = z.infer<typeof ContainerCol2Schema>;
export type ElSectionArgs = z.infer<typeof SectionSchema>;
