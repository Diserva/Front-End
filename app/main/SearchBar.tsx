'use client';

import { IoIosSearch } from 'react-icons/io';
import Button from '../components/utils/Button';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';

export default function SearchBar() {
	const { register, handleSubmit } = useForm();
	const onSubmit = useCallback((data: unknown) => {
		console.log(data);
	}, []);

	return (
		<form
			role='search'
			className='flex justify-between px-6 h-20 items-center w-full bg-navLayout border-rounded select-none'
			onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-1 gap-2 items-center'>
				<IoIosSearch color='white' className='w-[22px] h-[22px]' />
				<input
					type='text'
					className='w-full h-[60px] bg-transparent text-white outline-none'
					placeholder='пошук...'
					{...register('input')}
				/>
			</div>
			<Button type='submit'>Знайти</Button>
		</form>
	);
}
