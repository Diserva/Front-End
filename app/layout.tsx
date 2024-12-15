import clsx from 'clsx';
import { inter } from './lib/fonts';
import './globals.css';

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='uk'>
			<body className={clsx(inter, 'bg-mainBg')}>{children}</body>
		</html>
	);
}
