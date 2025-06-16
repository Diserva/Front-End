import { DefTextInpElArgs } from '@/app/lib/axios/apiSchemas';
import clsx from 'clsx';
import Image from 'next/image';
import { ChangeEventHandler, FormEventHandler, ReactNode } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { ConnectInput } from './constants';

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
	onInput,
	id
}: {
	name: string;
	placeholder: string;
	defaultText: string;
	onInput: FormEventHandler<HTMLTextAreaElement>;
	id: string;
}) {
	return (
		<WithInputLabel name={name}>
			<ConnectInput>
				{({ register }) => (
					<textarea
						placeholder={placeholder}
						className={clsx('resize-none overflow-hidden settings-input')}
						defaultValue={defaultText}
						onInput={onInput}
						{...register(id)}
					/>
				)}
			</ConnectInput>
		</WithInputLabel>
	);
}

export function DefTextInputUI({
	name,
	placeholder,
	defaultText,
	id
}: DefTextInpElArgs) {
	return (
		<WithInputLabel name={name}>
			<ConnectInput>
				{({ register }) => (
					<input
						type='text'
						placeholder={placeholder}
						className='settings-input peer'
						defaultValue={defaultText}
						{...register(id)}
					/>
				)}
			</ConnectInput>
		</WithInputLabel>
	);
}

export function SelectUI({ // це треба буде виправити
	selectShown,
	name,
	onForegroundClick,
	toggleSelShown,
	onOptionClick,
	currOption,
	options,
	id
}: {
	selectShown: boolean;
	onForegroundClick: () => void;
	name: string;
	toggleSelShown: () => void;
	currOption: string;
	options: string[];
	onOptionClick: (arg: string) => void;
	id: string;
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
	name,
	id
}: {
	name: string;
	onCheckboxClick: () => void;
	checked: boolean;
	id: string;
}) {
	return (
		<section className='w-full flex gap-3 items-center pl-3'>
			<div className='relative flex items-center rounded-sm  border-alternateBorder border-2 has-[:checked]:bg-blueAccent'>
				<ConnectInput>
					{({ register }) => (
						<input
							type='checkbox'
							className='appearance-none w-5 h-5 bg-transparent z-10'
							checked={checked}
							{...register(id, { onChange: onCheckboxClick })}
						/>
					)}
				</ConnectInput>
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
	inputId,
	outputText,
	fileName,
	clearFile,
	id
}: {
	name: string;
	inputId: string;
	outputText: string;
	fileName: string | undefined;
	clearFile: () => void;
	id: string;
}) {
	return (
		<WithInputLabel name={name}>
			<div>
				<label
					htmlFor={inputId}
					className='flex w-full items-center justify-between settings-input'>
					<span className='truncate'>{outputText}</span>
					<ConnectInput>
						{({ register }) => (
							<input
								id={inputId}
								type='file'
								className='hidden'
								{...register(id)}
							/>
						)}
					</ConnectInput>
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

export function SubmitButton() {
	return (
		<section className='flex justify-center w-full py-4'>
			<div className='w-4/5 flex justify-end'>
				<button type='submit' className='bg-blueAccent rounded-sm px-4 py-2'>
					Зберегти
				</button>
			</div>
		</section>
	);
}