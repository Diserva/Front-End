import { Provider } from 'jotai';
import Footer from './Footer';
import { ReactNode } from 'react';
import Header from './Header';

export default async function page({ children }: { children: ReactNode }) {
	return (
		<Provider>
			<Header />
			{children}
			<Footer />
		</Provider>
	);
}
