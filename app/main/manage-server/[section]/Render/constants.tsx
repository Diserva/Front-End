import {
	CheckboxElArgs,
	ContainerCol2ElArgs,
	DefContainerElArgs,
	DefTextInpElArgs,
	ExtandableInpElArgs,
	FileInputArgs,
	SectionElArgs,
	SectionType,
	SelectElArgs
} from '@/app/lib/axios/apiSchemas';
import clsx from 'clsx';
import Image from 'next/image';
import React, {
	ChangeEventHandler,
	FormEventHandler,
	ReactNode,
	Ref,
	useEffect,
	useId,
	useRef,
	useState
} from 'react';
import { IoIosArrowDown } from 'react-icons/io';

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

			<h4 className='absolute -top-2 left-[19px] peer-focus:!text-[14px] duration-200 text-[12px] leading-4 text-inputLabel px-1.5 bg-modalGray'>
				{name}
			</h4>
		</section>
	);
}

function Foreground({
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
	Section: function ({ children }) {
		return (
			<main className='flex flex-col gap-5 items-center py-[5.343vh]'>
				{children}
			</main>
		);
	},
	DefContainer: function ({
		children,
		isSwitchable,
		name
	}: DefContainerElArgs) {
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
	},

	ExtandableTextInput: function ({
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
	},

	DefTextInput: function ({
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
	},

	Select: function ({ name, options, defaultOption }: SelectElArgs) {
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
			<>
				<Foreground isVisible={selectShown} onClick={onForegroundClick} />
				<WithInputLabel name={name}>
					<button
						className='settings-input flex justify-between items-center'
						onClick={toggleSelShown}>
						<p>{currOption}</p>
						<IoIosArrowDown className='size-4' />
					</button>

					<div
						className={clsx({ hidden: !selectShown }, 'relative w-full h-0')}>
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
	},

	Container2: function ({ children }: { children: ReactNode }) {
		return <section className='flex gap-4'>{children}</section>;
	},

	Checkbox: function ({ name, isCheckedByDefault }: CheckboxElArgs) {
		const [checked, setChecked] = useState(isCheckedByDefault);
		const onCheckboxClick = () => setChecked(prev => !prev);

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
	},

	FileInput: function ({ name }: { name: string }) {
		const id = useId();
		const [fileName, setFileName] = useState<string>();

		const onSelect: ChangeEventHandler<HTMLInputElement> = e => {
			const file = e.target.files?.[0];
			if (file) setFileName(file.name);
		};

		const clearFile = () => {
			setFileName(undefined);
		};

		const outputText = fileName || 'Choose file';

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
};
