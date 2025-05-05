'use client';

import {
	currentSectionAtom,
	newServerSettingsAtom,
	sectionNameAtom
} from '@/app/lib/jotai/settingsAtom';
import { useAtomValue } from 'jotai';
import { RenderNode } from './algorithm';
import { SectionType } from '@/app/lib/axios/apiSchemas';
import {
	FieldValues,
	FormProvider,
	useForm,
	useFormContext,
	UseFormReturn
} from 'react-hook-form';
import { ReactNode } from 'react';

export function ConnectForm({
	children
}: {
	children: (arg: UseFormReturn<FieldValues, any, undefined>) => ReactNode;
}) {
	const methods = useFormContext();

	return children(methods);
}


export default function index() {
	const currSection = useAtomValue(currentSectionAtom) as SectionType;
	const methods = useForm();

	return (
		<FormProvider {...methods}>
			<RenderNode node={currSection} />
		</FormProvider>
	);
}
