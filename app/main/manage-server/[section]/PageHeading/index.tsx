'use client';

import { MouseEvent, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Heading } from './UI';
import { Navigation, SettingsSectionNames } from './client';

gsap.registerPlugin(useGSAP);

export default function SettingsHeading({
	serverName
}: {
	serverName: string;
}) {
	return (
		<header className='flex flex-col w-full pt-8 px-[5vw]'>
			<Heading serverName={serverName} />
			<Navigation />
		</header>
	);
}
