'use client';

import { MouseEvent, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { HeadingUI } from './UI';
import { Navigation } from './client';


export default function SettingsHeading({
	serverName
}: {
	serverName: string;
}) {
	return (
		<header className='flex flex-col w-full pt-8 px-[5vw]'>
			<HeadingUI serverName={serverName} />
			<Navigation />
		</header>
	);
}
