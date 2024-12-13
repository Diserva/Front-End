import clsx from 'clsx';
import { inter } from './lib/fonts';
import ReduxProvider from './lib/providers/ReduxProvider';
import './globals.css';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='uk'>
			<ReduxProvider>
				<body className={clsx(inter, 'bg-mainBg')}>{children}</body>
			</ReduxProvider>
		</html>
	);
}
