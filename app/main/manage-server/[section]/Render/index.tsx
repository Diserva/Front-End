'use client';

import { SectionType } from '@/app/lib/axios/apiSchemas';
import { currentSectionAtom } from '@/app/lib/jotai/settingsAtom';
import { useAtomValue } from 'jotai';
import { FormProvider, useForm } from 'react-hook-form';
import { RenderNode } from './algorithm';
import { SubmitButton } from './UI';
import { useEffect } from 'react';

export default function Render() {
	const currSection = useAtomValue(currentSectionAtom) as SectionType;
	const methods = useForm();

	const onSubmit = (data: unknown) => console.log(data);
	console.log(methods.formState.isDirty); // make sure formState is read before render to enable the Proxy

	const { watch } = methods;
	type Timer = ReturnType<typeof setTimeout>;
	let timer: Timer | undefined;

	

	useEffect(() => {
		const { unsubscribe } = watch((value, { name, type }) => {
			console.log({ value, name, type });

			console.log({
				value: value[name as string],
				state: methods.getFieldState(name as string)
			});
			clearTimeout(timer);
			timer = setTimeout(() => {

			}, 3_000);
		});
		return () => unsubscribe();
	}, [watch]);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<RenderNode node={currSection} />
				<SubmitButton />
			</form>
		</FormProvider>
	);
}
