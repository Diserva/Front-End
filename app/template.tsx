import type { Metadata } from 'next';
import './globals.css';
import clsx from 'clsx';
import { inter } from './lib/fonts';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
	title: 'Ceavex discord app',
	description: 'tool to manage your discord servers with bots'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='flex flex-col items-center'>
			<Header />
			<div className='bg-mainBg w-full py-8 flex flex-col items-center min-h-[500px]'>
				{children}
			</div>
			<Footer />
		</main>
	);
}
