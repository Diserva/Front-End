'use client';

import {
	currentSectionAtom,
	newServerSettingsAtom,
	sectionNameAtom
} from '@/app/lib/jotai/settingsAtom';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { FormEventHandler, ReactNode, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function Render() {
	const settings = useAtomValue(newServerSettingsAtom);
	const currSection = useAtomValue(currentSectionAtom);
	const sectionName = useAtomValue(sectionNameAtom);

	return (
		<main className='flex flex-col gap-5 items-center py-[5.343vh]'>
			<Section>
				<Input
					name={'some label'}
					placeholder='some placeholder'
					defaultText='default value'
				/>
				<ExtandableInput
					name='another label'
					placeholder='another placeholder'
					defaultText='some another text'
				/>
				<Select
					name='hello'
					defaultValue='some def value'
					options={[
						{ name: 'opt1', value: 'Option 1' },
						{ name: 'opt2', value: 'Option 2' },
						{ name: 'opt3', value: 'Option 3' },
						{ name: 'opt4', value: 'Option 4' }
					]}
				/>
				<Checkbox name='some description' isDefaultChecked={false} />
			</Section>
		</main>
	);
}

function Section({ children }: { children: ReactNode }) {
	return (
		<section className='flex flex-col gap-3 w-4/5'>
			<h3 className='text-white text-xl pl-6'>Main</h3>
			<section className='flex flex-col bg-modalGray p-[1.875vw] gap-4 rounded-2xl'>
				{children}
			</section>
		</section>
	);
}

function ExtandableInput({
	name,
	placeholder,
	defaultText
}: {
	name: string;
	placeholder: string;
	defaultText: string;
}) {
	const onInput: FormEventHandler<HTMLTextAreaElement> = e => {
		console.log({ e, style1: e.nativeEvent.target });
		const textarea = e.nativeEvent.target as HTMLTextAreaElement;

		if (textarea && 'style' in textarea) {
			textarea.style.height = '48px';
			textarea.style.height = textarea.scrollHeight + 'px';
		}
	};

	return (
		<WithInputLabel name={name}>
			<textarea
				name={name}
				placeholder={placeholder}
				className={clsx('resize-none overflow-hidden settings-input')}
				defaultValue={defaultText}
				onInput={onInput}
			/>
		</WithInputLabel>
	);
}

function WithInputLabel({
	// пофіксити баг: на :focus за рахунок збільшення рамок текст трохи з'їзджає
	// додати невелику анімацію, що label буде трохи підніматися на фокус. - бачив таке в інших місцях, то чому не реалізувати
	name,
	children
}: {
	name: string;
	children: ReactNode;
}) {
	return (
		<section
			className='flex flex-col relative w-full [&>input:focus_+_h4]:!text-5xl
 '>
			{children}

			<h4 className='absolute -top-2 left-[19px] peer-focus:!text-[14px] duration-200 text-[12px]  leading-4 text-inputLabel px-1.5 bg-modalGray'>
				{name}
			</h4>
		</section>
	);
}

function Input({
	name,
	placeholder,
	defaultText
}: {
	name: string;
	placeholder: string;
	defaultText: string;
}) {
	return (
		<WithInputLabel name={name}>
			<input
				type='text'
				name={name}
				placeholder={placeholder}
				className='settings-input peer'
				defaultValue={defaultText}
			/>
		</WithInputLabel>
	);
}

type Option = {
	name: string;
	value: string;
};

function Select({
	name,
	options,
	defaultValue
}: {
	name: string;
	options: Option[];
	defaultValue: string;
}) {
	const [currOption, setOption] = useState(() => defaultValue);
	const [selectShown, setSelShown] = useState(false);
	const toggleSelShown = () => setSelShown(prev => !prev);
	const onOptionClick = (optVal: string) => {
		toggleSelShown();
		setOption(optVal);
	};

	return (
		<WithInputLabel name={name}>
			<button
				className='settings-input flex justify-between items-center'
				onClick={toggleSelShown}>
				<p>{currOption}</p>
				<IoIosArrowDown className='size-4' />
			</button>

			<div className={clsx({ hidden: !selectShown }, 'relative w-full h-0')}>
				<ul
					className={clsx(
						'flex flex-col absolute top-2 left-0 w-full p-6 bg-modalGray rounded-lg border border-alternateBorder'
					)}>
					{options.map(({ value }) => (
						<li
							key={value}
							className='hover:bg-[#2E2E2E] py-1 px-2'
							onClick={() => onOptionClick(value)}>
							{value}
						</li>
					))}
				</ul>
			</div>
		</WithInputLabel>
	);
}

function Checkbox({
	name,
	isDefaultChecked
}: {
	name: string;
	isDefaultChecked: boolean;
}) {
	const [checked, setChecked] = useState(isDefaultChecked);

	return (
		<section className='w-full flex gap-3 items-center pl-3'>
			<div className='relative flex items-center'>
				<input
					type='checkbox'
					className='appearance-none w-5 h-5 rounded-sm border-alternateBorder border-2 checked:bg-blueAccent'
					checked={checked}
					onChange={() => setChecked(prev => !prev)}
				/>
				<Image
					width={11}
					height={11}
					src='/checkmark.png'
					className={clsx('z-10 absolute top-1.5 left-1', {
						hidden: !checked
					})}
					alt='tick'
				/>
			</div>

			<p className='not-peer-checked:bg-gray-500'>{name}</p>
		</section>
	);
}
