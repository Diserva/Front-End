import clsx from 'clsx';
import { inter } from './lib/fonts';
import './globals.css';
import Head from 'next/head';
import { Metadata } from 'next';
import { DESCRIPTION, TITLE } from './lib/constants/meta';

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION
};
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='uk'>
			<Head>
				<title>{TITLE}</title>
				<link
					rel='icon'
					type='image/x-icon'
					sizes='32x32'
					href='/favicon_32x32.ico'
				/>
			</Head>
			<body className={clsx(inter, 'bg-mainBg')}>{children}</body>
		</html>
	);
}
