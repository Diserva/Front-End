import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthProtectionProvider from '../lib/providers/AuthProtectionProvider';

export default function layout({ children }: { children: ReactNode }) {
	return (
		// <AuthProtectionProvider>
			<main className='flex flex-col items-center'>
				<Header />
				<div className=' w-full py-8 flex flex-col items-center min-h-[500px]'>
					{children}
				</div>
				<Footer />
			</main>
		// </AuthProtectionProvider>
	);
}
