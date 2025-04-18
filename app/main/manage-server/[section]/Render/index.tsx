'use client';

import {
	CheckboxElArgs,
	DefContainerElArgs,
	DefTextInpElArgs,
	ExtandableInpElArgs,
	SectionElArgs,
	SelectElArgs
} from '@/app/lib/axios/apiSchemas';
import {
	currentSectionAtom,
	newServerSettingsAtom,
	sectionNameAtom
} from '@/app/lib/jotai/settingsAtom';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import {
	ChangeEventHandler,
	FormEventHandler,
	ReactNode,
	useId,
	useState
} from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function Render() {
	const settings = useAtomValue(newServerSettingsAtom);
	const currSection = useAtomValue(currentSectionAtom);
	const sectionName = useAtomValue(sectionNameAtom);

	return (
		<main className='flex flex-col gap-5 items-center py-[5.343vh]'>
			<Section name='Main' isSwitchable={true}>
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
					defaultOption='some def value'
					options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
				/>

				<Container2
					children={[
						<Input
							name={'some label'}
							placeholder='some placeholder'
							defaultText='default value'
							key={useId()}
						/>,
						<ExtandableInput
							name='another label'
							placeholder='another placeholder'
							defaultText='some another text'
							key={useId()}
						/>
					]}
				/>

				<FileInput name='Files' />

				<Checkbox name='some description' isCheckedByDefault={false} />
				<Checkbox name='some another description' isCheckedByDefault={true} />
			</Section>
		</main>
	);
}

function Section({ children, isSwitchable, name }: DefContainerElArgs) {
	const [checked, setChecked] = useState(true);

	return (
		<div className='flex flex-col gap-3 w-4/5'>
			<div className='flex'>
				<section
					className={clsx('flex justify-start items-center duration-200', {
						hidden: !isSwitchable,
						'!justify-end duration-200': checked
					})}
					onClick={() => setChecked(prev => !prev)}>
					<span className='w-5 h-5 absolute rounded-full bg-white mx-0.5' />
					<div
						className={clsx(
							'appearance-none w-10 h-6 rounded-full bg-defaultText',
							{ '!bg-blueAccent': checked }
						)}
					/>
				</section>

				<h3
					className={clsx('text-defaultText text-xl pl-6', {
						'text-white': checked
					})}>
					{name}
				</h3>
			</div>

			<section className='flex flex-col bg-modalGray p-[1.875vw] gap-5 rounded-2xl'>
				{children}
			</section>
		</div>
	);
}

function ExtandableInput({
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

function Input({ name, placeholder, defaultText }: DefTextInpElArgs) {
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

function Select({ name, options, defaultOption }: SelectElArgs) {
	const [currOption, setOption] = useState(() => defaultOption);
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
						'flex flex-col absolute top-2 left-0 w-full p-6 bg-modalGray z-10 rounded-lg border border-alternateBorder'
					)}>
					{options.map(value => (
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

function Container2({ children }: { children: ReactNode }) {
	return <section className='flex gap-4'>{children}</section>;
}

function Checkbox({ name, isCheckedByDefault }: CheckboxElArgs) {
	const [checked, setChecked] = useState(isCheckedByDefault);

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
					className={clsx('absolute top-1.5 left-1', {
						hidden: !checked
					})}
					alt='tick'
				/>
			</div>

			<p className={clsx('text-defaultText', { 'text-white': checked })}>
				{name}
			</p>
		</section>
	);
}

function FileInput({ name }: { name: string }) {
	const [fileName, setFileName] = useState<string>();
	const onSelect: ChangeEventHandler<HTMLInputElement> = e => {
		const fullPath = e.target.value;
		const newFileName = fullPath.split('\\').pop();
		setFileName(newFileName);
	};

	const defaultText = 'Choose file';
	const outputText = fileName || defaultText;

	return (
		<WithInputLabel name={name}>
			<section className='flex justify-between items-center settings-input '>
				<label htmlFor='file-upload' className='w-full flex items-center'>
					<p>{outputText}</p>
					<input
						id='file-upload'
						type='file'
						className='hidden'
						onChange={onSelect}
						value={fileName}
					/>
				</label>
				<Image
					src='/trashcan.png'
					width={17}
					height={17}
					alt='trashcan icon'
					className='w-5 h-5'
				/>
			</section>
		</WithInputLabel>
	);
}
