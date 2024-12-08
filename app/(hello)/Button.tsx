import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
	return (
		<button className='bg-accent py-2 px-14 rounded-lg flex justify-center items-center text-white'>
			{children}
		</button>
	);
}
