'use client';

import { SectionType } from '@/app/lib/axios/apiSchemas';
import {
	currentSectionAtom
} from '@/app/lib/jotai/settingsAtom';
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




export default function index() {
	const currSection = useAtomValue(currentSectionAtom) as SectionType;
	const methods = useForm();

	return (
		<FormProvider {...methods}>
			<RenderNode node={currSection} />
		</FormProvider>
	);
}
