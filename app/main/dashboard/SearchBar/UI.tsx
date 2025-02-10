import { Button } from '@/components/ui/button';
import React, { FormEvent, FormEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IoIosSearch } from 'react-icons/io';

export type Fields = {
	input: string;
};

export default function SearchBarUI({
	onSubmit,
	register
}: {
	onSubmit: FormEventHandler<HTMLFormElement>;
	register: UseFormRegister<Fields>;
}) {
	return (
		<form
			role='search'
			className='flex justify-between px-6 h-20 items-center w-full bg-navLayout border-rounded select-none'
			onSubmit={onSubmit}>
			<div className='flex flex-1 gap-2 items-center'>
				<IoIosSearch color='white' className='w-[22px] h-[22px]' />
				<input
					type='text'
					className='w-full h-[60px] bg-transparent text-white outline-none'
					placeholder='пошук...'
					{...register('input')}
				/>
			</div>
			<Button type='submit' className='shadow-none bg-blueAccent'>
				Знайти
			</Button>
		</form>
	);
}
