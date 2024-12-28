import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Provider } from 'jotai';

export default function layout({ children }: { children: ReactNode }) {
	return (
		<Provider>
			<main className='flex flex-col items-center'>
				<Header />
				{children}
				<Footer />
			</main>
		</Provider>
	);
}
