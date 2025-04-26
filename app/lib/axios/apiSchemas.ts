import { ReactNode } from 'react';
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
	name: z.string()
});

const ElemDefaultTextInputShema = z.object({
	type: z.literal('DefTextInput'),
	name: z.string(),
	placeholder: z.string(),
	defaultText: z.string()
});

const ElemExtandableTextInputSchema = z.object({
	type: z.literal('ExtandableTextInput'),
	name: z.string(),
	placeholder: z.string(),
	defaultText: z.string()
});

const ElemFileInputSchema = z.object({
	type: z.literal('FileInput'),
	name: z.string()
});

const allElementsSchema = z.union([
	ElemSelectSchema,
	ElemCheckboxSchema,
	ElemDefaultTextInputShema,
	ElemExtandableTextInputSchema,
	ElemFileInputSchema
]);

const ContainerCol2Schema = z.object({
	type: z.literal('Container2'),
	children: z.union([allElementsSchema, allElementsSchema.array()])
});

const AnyContent = z.union([allElementsSchema, ContainerCol2Schema]);

const DefContainerSchema = z.object({
	type: z.literal('DefContainer'),
	name: z.string(),
	isSwitchable: z.boolean(),
	children: z.union([AnyContent, AnyContent.array()])
});

const SectionSchema = z.object({
	type: z.literal('Section'),
	name: z.string(),
	children: z.union([DefContainerSchema, DefContainerSchema.array()])
});

export const SettingsSchema = z.array(SectionSchema);

export const GuildsSchema = z.array(GuildShema);
export type TokenType = z.infer<typeof TokenSchema>;
export type UserType = z.infer<typeof UserSchema>;
export type GuildsType = z.infer<typeof GuildsSchema>;
export type GuildType = z.infer<typeof GuildShema>;

export type SettingsType = z.infer<typeof SettingsSchema>;
export type SectionType = z.infer<typeof SectionSchema>;
export type SelectType = z.infer<typeof ElemSelectSchema>;
export type CheckboxType = z.infer<typeof ElemCheckboxSchema>;
export type DefTextInpType = z.infer<typeof ElemDefaultTextInputShema>;
export type ExtandableInpType = z.infer<typeof ElemExtandableTextInputSchema>;
export type DefContainerType = z.infer<typeof DefContainerSchema>;
export type FileInputType = z.infer<typeof ElemFileInputSchema>;
export type ContainerCol2Type = z.infer<typeof ContainerCol2Schema>;

export type SelectElArgs = Omit<SelectType, 'type'>;
export type CheckboxElArgs = Omit<CheckboxType, 'type'>;
export type DefTextInpElArgs = Omit<DefTextInpType, 'type'>;
export type ExtandableInpElArgs = Omit<ExtandableInpType, 'type'>;
export type FileInputArgs = Omit<FileInputType, 'type'>;
export type DefContainerElArgs = Omit<
	// in DefContainerElArgs I overwrite the property children, cause` object won't be compatible with type of ReactNode, when I assert it as function arguments type
	DefContainerType,
	'type' | 'children'
> & {
	children: ReactNode;
};
export type ContainerCol2ElArgs = Omit<
	ContainerCol2Type,
	'type' | 'children'
> & {
	children: ReactNode;
};
export type SectionElArgs = Omit<SectionType, 'type' | 'children'> & {
	children: ReactNode;
};
