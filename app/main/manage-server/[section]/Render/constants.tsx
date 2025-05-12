'use client';

import {
	CheckboxElArgs,
	ContainerCol2ElArgs,
	DefContainerElArgs,
	DefTextInpElArgs,
	ExtandableInpElArgs,
	FileInputArgs,
	SectionElArgs,
	SelectElArgs
} from '@/app/lib/axios/apiSchemas';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Container2, DefTextInput, Section } from './UI';
import {
	Checkbox,
	DefContainer,
	ExtandableTextInput,
	FileInput,
	Select
} from './client';

type Component<T> = (args: T) => ReactNode;
export type RegisterFuncParam = ReturnType<typeof useFormContext>;

export function ConnectForm({
	InputComponent
}: {
	InputComponent: (arg: RegisterFuncParam) => ReactNode;
}) {
	const methods = useFormContext();

	return InputComponent(methods);
}

export function ConnectInput({
	children
}: {
	children: (arg: RegisterFuncParam) => ReactNode;
}) {
	const methods = useFormContext();

	return children(methods);
}

export type ComponentsMap = {
	DefContainer: Component<DefContainerElArgs>;
	Checkbox: Component<CheckboxElArgs>;
	ExtandableTextInput: Component<ExtandableInpElArgs>;
	DefTextInput: Component<DefTextInpElArgs>;
	Select: Component<SelectElArgs>;
	Container2: Component<ContainerCol2ElArgs>;
	FileInput: Component<FileInputArgs>;
	Section: Component<SectionElArgs>;
};

export const components: ComponentsMap = {
	Section: Section,
	DefContainer: DefContainer,
	ExtandableTextInput: ExtandableTextInput, //
	DefTextInput: DefTextInput, //
	Select: Select, //
	Container2: Container2,
	Checkbox: Checkbox, //
	FileInput: FileInput //
};
