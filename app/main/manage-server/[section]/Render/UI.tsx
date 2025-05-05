import { DefTextInpElArgs } from '@/app/lib/axios/apiSchemas';
import clsx from 'clsx';
import Image from 'next/image';
import { ChangeEventHandler, FormEventHandler, ReactNode } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export function Foreground({
	onClick,
	isVisible
}: {
	onClick: () => void;
	isVisible: boolean;
}) {
	return (
		<div
			className={clsx(
				'w-[99%] absolute top-0 left-0 h-screen bg-transparent z-10', // in case of width, weird problems require weird solutions.
				{
					hidden: !isVisible
				}
			)}
			onClick={onClick}
		/>
	);
}

export function WithInputLabel({
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

			<h4 className='absolute -top-2 left-[19px] peer-focus:!text-[14px] duration-200 text-[12px] leading-4 text-inputLabel px-1.5 bg-modalGray'>
				{name}
			</h4>
		</section>
	);
}

export function Section({ children }: { children: ReactNode }) {
	return (
		<main className='flex flex-col gap-5 items-center py-[5.343vh]'>
			{children}
		</main>
	);
}

export function DefContainerUI({
	children,
	isSwitchable,
	checked,
	setChecked,
	name
}: {
	children: ReactNode;
	isSwitchable: boolean;
	checked: boolean;
	setChecked: React.Dispatch<React.SetStateAction<boolean>>;
	name: string;
}) {
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

export function ExtandableTextInputUI({
	name,
	placeholder,
	defaultText,
	onInput
}: {
	name: string;
	placeholder: string;
	defaultText: string;
	onInput: FormEventHandler<HTMLTextAreaElement>;
}) {
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

export function DefTextInput({
	name,
	placeholder,
	defaultText
}: DefTextInpElArgs) {
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

export function SelectUI({
	selectShown,
	name,
	onForegroundClick,
	toggleSelShown,
	onOptionClick,
	currOption,
	options
}: {
	selectShown: boolean;
	onForegroundClick: () => void;
	name: string;
	toggleSelShown: () => void;
	currOption: string;
	options: string[];
	onOptionClick: (arg: string) => void;
}) {
	return (
		<>
			<Foreground isVisible={selectShown} onClick={onForegroundClick} />
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
		</>
	);
}

export function Container2({ children }: { children: ReactNode }) {
	return <section className='flex gap-4'>{children}</section>;
}

export function CheckboxUI({
	checked,
	onCheckboxClick,
	name
}: {
	name: string;
	onCheckboxClick: () => void;
	checked: boolean;
}) {
	return (
		<section className='w-full flex gap-3 items-center pl-3'>
			<div className='relative flex items-center rounded-sm  border-alternateBorder border-2 has-[:checked]:bg-blueAccent'>
				<input
					type='checkbox'
					className='appearance-none w-5 h-5 bg-transparent z-10'
					checked={checked}
					onChange={onCheckboxClick}
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

export function FileInputUI({
	name,
	id,
	outputText,
	onSelect,
	fileName,
	clearFile
}: {
	name: string;
	id: string;
	outputText: string;
	onSelect: ChangeEventHandler<HTMLInputElement>;
	fileName: string | undefined;
	clearFile: () => void;
}) {
	return (
		<WithInputLabel name={name}>
			<div>
				<label
					htmlFor={id}
					className='flex w-full items-center justify-between settings-input'>
					<span className='truncate'>{outputText}</span>
					<input id={id} type='file' className='hidden' onChange={onSelect} />
					{fileName && (
						<button
							type='button'
							onClick={clearFile}
							aria-label='Clear selected file'
							className='ml-2'>
							<Image src='/trashcan.png' width={17} height={17} alt='' />
						</button>
					)}
				</label>
			</div>
		</WithInputLabel>
	);
}
