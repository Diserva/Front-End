import clsx from 'clsx';
import { inter } from './lib/fonts';
import './globals.css';
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
			<body className={clsx(inter, 'bg-mainBg m-0 box-border')}>{children}</body>
		</html>
	);
}
