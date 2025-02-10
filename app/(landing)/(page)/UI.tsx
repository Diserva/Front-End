import { ReactNode } from 'react';

export default function LandingUI({
	displayedButton
}: {
	displayedButton: ReactNode;
}) {
	return (
		<div className='w-full flex-center flex-col  gap-8 h-screen'>
			<h1 className='text-4xl text-white '>Раді бачити тебе!</h1>
			{displayedButton}
		</div>
	);
}
