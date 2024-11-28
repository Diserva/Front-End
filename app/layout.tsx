import type { Metadata } from 'next';
import './globals.css';
import clsx from 'clsx';
import { inter } from './lib/fonts';

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
		<html lang='en'>
			<body className={clsx(inter)}>{children}</body>
		</html>
	);
}
