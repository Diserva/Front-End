import { Provider } from 'jotai';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ReactNode } from 'react';

export default async function page({ children }: { children: ReactNode }) {
	return (
		<Provider>
			<Header />
			{children}
			<Footer />
		</Provider>
	);
}
