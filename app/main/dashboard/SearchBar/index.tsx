'use client';

import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useSetAtom } from 'jotai';
import { searchInputAtom } from '@/app/lib/jotai/dashboardAtoms';
import SearchBarUI, { Fields } from './UI';

export default function SearchBar() {
	const { register, handleSubmit } = useForm<Fields>();
	const setInput = useSetAtom(searchInputAtom);
	const onSubmit = useCallback((data: Fields) => setInput(data.input), []);

	return <SearchBarUI onSubmit={handleSubmit(onSubmit)} register={register} />;
}
