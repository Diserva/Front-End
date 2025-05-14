'use client';

import {
	CheckboxElArgs,
	DefContainerElArgs,
	ExtandableInpElArgs,
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
	defaultText
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
		<ExtandableTextInputUI {...{ name, placeholder, defaultText, onInput }} />
	);
}

export function Select({ name, options, defaultOption }: SelectElArgs) {
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

export function Checkbox({ name, isCheckedByDefault }: CheckboxElArgs) {
	const [checked, setChecked] = useState(isCheckedByDefault);
	const onCheckboxClick = () => setChecked(prev => !prev);

	return <CheckboxUI {...{ name, checked, onCheckboxClick }} />;
}

export function FileInput({ name }: { name: string }) {
	const id = useId();
	const [fileName, setFileName] = useState<string>();

	const clearFile = () => {
		setFileName(undefined);
	};

	const outputText = fileName || 'Choose file';

	return <FileInputUI {...{ name, id, clearFile, outputText, fileName }} />;
}

export function SubmitButton() {
	return (
		<section className='flex w-full justify-end sticky bottom-10 left-5'>
			<button type='submit' className='bg-blueAccent rounded-sm px-4 py-2'>
				Підтвердити збережння
			</button>
		</section>
	);
}
