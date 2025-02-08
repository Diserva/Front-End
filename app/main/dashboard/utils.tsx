import { ReactNode } from 'react';

export function GuildsContainer({ children }: { children: ReactNode }) {
	return (
		<section className='grid grid-cols-3 max-lg:grid-cols-2 max-md:flex max-md:flex-col max-md:items-center w-full gap-x-9 gap-y-8;'>
			{children}
		</section>
	);
}

export function PageContainer({ children }: { children: ReactNode }) {
	return (
		<section className='w-11/12 py-8 flex flex-col items-center min-h-[500px]'>
			{children}
		</section>
	);
}
