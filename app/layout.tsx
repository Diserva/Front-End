import clsx from 'clsx';
import { inter } from './lib/fonts';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Diserva',
	description: 'Developing such a perfect product'
};
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='uk'>
			<body
				className={clsx(
					inter,
					'bg-mainBg m-0 box-border flex flex-col items-center justify-center'
				)}>
				{children}
			</body>
		</html>
	);
}
