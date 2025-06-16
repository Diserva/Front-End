'use client';

import {
	CheckboxElArgs,
	DefContainerElArgs,
	ExtandableInpElArgs,
	FileInputArgs,
	SelectElArgs
} from '@/app/lib/axios/apiSchemas';
import { createStore } from 'jotai';
import { FormEventHandler, useId, useState } from 'react';
import {
	CheckboxUI,
	DefContainerUI,
	ExtandableTextInputUI,
	FileInputUI,
	SelectUI
} from './UI';

export function DefContainer({
	children,
	isSwitchable,
	name
}: DefContainerElArgs) {
	const [checked, setChecked] = useState(true);
	const jotaiStore = createStore();

	return (
		<DefContainerUI
			{...{ checked, setChecked, children, isSwitchable, name }}
		/>
	);
}

export function ExtandableTextInput({
	name,
	placeholder,
	defaultText,
	id
}: ExtandableInpElArgs) {
	const onInput: FormEventHandler<HTMLTextAreaElement> = e => {
		console.log({ e, style1: e.nativeEvent.target });
		const textarea = e.nativeEvent.target as HTMLTextAreaElement;

		if (textarea && 'style' in textarea) {
			textarea.style.height = '48px';
			textarea.style.height = textarea.scrollHeight + 'px';
		}
	};

	return (
		<ExtandableTextInputUI {...{ name, placeholder, defaultText, onInput, id }} />
	);
}

export function Select({ name, options, defaultOption, id }: SelectElArgs) {
	const [currOption, setOption] = useState(() => defaultOption);
	const [selectShown, setSelShown] = useState(false);
	const toggleSelShown = () => setSelShown(prev => !prev);
	const onOptionClick = (optVal: string) => {
		toggleSelShown();
		setOption(optVal);
	};
	const onForegroundClick = () => {
		toggleSelShown();
	};

	return (
		<SelectUI
			{...{
				currOption,
				name,
				options,
				selectShown,
				onOptionClick,
				onForegroundClick,
				toggleSelShown
			}}
		/>
	);
}

export function Checkbox({ name, isCheckedByDefault, id }: CheckboxElArgs) {
	const [checked, setChecked] = useState(isCheckedByDefault);
	const onCheckboxClick = () => setChecked(prev => !prev);

	return <CheckboxUI {...{ name, checked, onCheckboxClick }} />;
}

export function FileInput({ name, id }: FileInputArgs) {
	const inputId = useId();
	const [fileName, setFileName] = useState<string>();

	const clearFile = () => {
		setFileName(undefined);
	};

	const outputText = fileName || 'Choose file';

	return (
		<FileInputUI {...{ name, inputId, clearFile, outputText, fileName }} />
	);
}
