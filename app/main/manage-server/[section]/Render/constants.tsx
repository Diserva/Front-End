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
import clsx from 'clsx';
import { createStore } from 'jotai';
import Image from 'next/image';
import React, {
	ChangeEventHandler,
	FormEventHandler,
	ReactNode,
	useId,
	useState
} from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import {
	Container2,
	DefTextInput,
	Foreground,
	Section,
	WithInputLabel
} from './UI';
import { Checkbox, DefContainer, ExtandableTextInput, FileInput, Select } from './client';

type Component<T> = (args: T) => ReactNode;

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
	ExtandableTextInput: ExtandableTextInput,
	DefTextInput: DefTextInput,
	Select: Select,
	Container2: Container2,
	Checkbox: Checkbox,
	FileInput: FileInput
};
