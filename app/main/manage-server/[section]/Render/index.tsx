'use client';

import {
	currentSectionAtom,
	newServerSettingsAtom,
	sectionNameAtom
} from '@/app/lib/jotai/settingsAtom';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { FormEventHandler } from 'react';

export default function Render() {
	const settings = useAtomValue(newServerSettingsAtom);
	const currSection = useAtomValue(currentSectionAtom);
	const sectionName = useAtomValue(sectionNameAtom);

	console.log({ currSection, sectionName, settings });

	return (
		<main className='flex flex-col gap-5 items-center'>
			<section className='flex flex-col gap-2 w-4/5'>
				<h3>some content</h3>
				<section className='flex flex-col bg-modalGray p-[1.875vw] rounded-2xl'>
					<Input
						label={'some label'}
						placeholder='some placeholder'
						defaultText='default value'
						extandable={true}
					/>
				</section>
			</section>
		</main>
	);
}

function Input({
	label,
	placeholder,
	defaultText,
	extandable
}: {
	label: string;
	placeholder: string;
	defaultText: string;
	extandable: boolean;
}) {
	const onInput: FormEventHandler<HTMLTextAreaElement> = e => {
		console.log({ e, style1: e.nativeEvent.target });
		const textarea = e.nativeEvent.target;

		if (textarea && 'style' in textarea) {
			textarea.style.height = '48px'; /* Reset the height*/
			textarea.style.height = textarea.scrollHeight + 'px';
		}
	};

	const inputClass =
		'w-full rounded-lg bg-transparent border-alternateBorder border px-6 box-border h-fit leading-5 py-3 focus:border-white focus:ring-0 focus-visible:outline-none text-sm text-defaultText h-[48px]';

	return (
		<section className='flex flex-col relative w-full'>
			<h4 className='absolute -top-2 left-[19px] text-[12px] leading-4 text-inputLabel px-1.5 bg-modalGray'>
				{label}
			</h4>
			{extandable ? (
				<textarea
					name={label}
					placeholder={placeholder}
					className={clsx(inputClass, 'resize-none overflow-hidden')}
					defaultValue={defaultText}
					onInput={onInput}
				/>
			) : (
				<input
					type='text'
					name={label}
					placeholder={placeholder}
					className={inputClass}
					defaultValue={defaultText}
				/>
			)}
		</section>
	);
}

/*
Такс, що мені треба..

по-перше. Треба вимкнути можливість збіьльшувати чи зменшувати поле за бажанням. Це має робити або через enter, або через текст. 
по-друге. Треба додати можливість, щоб поле розширювалося по тексту
*/
