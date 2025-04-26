'use client';

import {
	currentSectionAtom,
	newServerSettingsAtom,
	sectionNameAtom
} from '@/app/lib/jotai/settingsAtom';
import { useAtomValue } from 'jotai';
import { RenderNode } from './algorithm';
import { SectionType } from '@/app/lib/axios/apiSchemas';
export default function index() {
	const currSection = useAtomValue(currentSectionAtom) as SectionType;

	return <RenderNode node={currSection} />;
}
