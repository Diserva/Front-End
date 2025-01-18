import { ReactNode } from 'react';
import { Provider } from 'jotai';

export default function layout({ children }: { children: ReactNode }) {
	return (
		<Provider>
			<main className='flex flex-col items-center'>
				{children}
			</main>
		</Provider>
	);
}
