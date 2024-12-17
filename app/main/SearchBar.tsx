'use client';

import { IoIosSearch } from 'react-icons/io';
import Button from '../components/utils/Button';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useAtomCallback } from 'jotai/utils';
import { searchInputAtom } from '../lib/jotai/dashboardAtoms';
import { useAtom } from 'jotai';

export default function SearchBar() {
	type Fields = {
		input: string;
	};

	const { register, handleSubmit } = useForm<Fields>();
	const [_, setInput] = useAtom(searchInputAtom);
	const onSubmit = useCallback((data: Fields) => setInput(data.input), []);

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
