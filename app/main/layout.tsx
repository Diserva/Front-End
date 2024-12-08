import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthProtectionProvider from '../lib/providers/AuthProtectionProvider';

export default function layout({ children }: { children: ReactNode }) {
	return (
		<main className='flex flex-col items-center'>
			<Header />
			<div className=' w-11/12 py-8 flex flex-col items-center min-h-[500px]'>
				{children}
			</div>
			<Footer />
		</main>
	);
}
