"use client"

import { newServerSettingsAtom } from '@/app/lib/jotai/settingsAtom';
import { useAtomValue } from 'jotai';

export default function Render() {
	const settings = useAtomValue(newServerSettingsAtom);

    return <section />
}
