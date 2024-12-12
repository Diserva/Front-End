import clsx from 'clsx';
import { inter } from './lib/fonts';
import ReduxProvider from './lib/providers/ReduxProvider';
import './globals.css';
import AuthProtectionProvider from './lib/providers/AuthProtectionProvider';
import CookiesProvider from './lib/providers/CookiesProvider';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='uk'>
			<ReduxProvider>
				<AuthProtectionProvider>
					<body className={clsx(inter, 'bg-mainBg')}>{children}</body>
				</AuthProtectionProvider>
			</ReduxProvider>
		</html>
	);
}
