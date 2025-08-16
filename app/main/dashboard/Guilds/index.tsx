"use client"

import { filteredGuildsAtom } from '@/app/lib/jotai/dashboardAtoms';
import { useAtomValue } from 'jotai';
import React from 'react';
import GuildsUI from './UI';

export default function Guilds() {
	const filteredGuilds = useAtomValue(filteredGuildsAtom);

	return <GuildsUI filteredGuilds={filteredGuilds} />;
}



