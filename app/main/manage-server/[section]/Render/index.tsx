'use client';

import { SectionType } from '@/app/lib/axios/apiSchemas';
import { currentSectionAtom } from '@/app/lib/jotai/settingsAtom';
import { useAtomValue } from 'jotai';
import { ReactNode } from 'react';
import {
	FieldValues,
	FormProvider,
	useForm,
	useFormContext,
	UseFormReturn
} from 'react-hook-form';
import { RenderNode } from './algorithm';
import { SubmitButton } from './client';

export default function index() {
	const currSection = useAtomValue(currentSectionAtom) as SectionType;
	const methods = useForm();

	const onSubmit = (data: unknown) => console.log(data);
	console.log(methods.formState.isDirty); // make sure formState is read before render to enable the Proxy

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<RenderNode node={currSection} />
				<SubmitButton />
			</form>
		</FormProvider>
	);
}
