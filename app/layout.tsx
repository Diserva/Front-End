import clsx from 'clsx';
import { inter } from './lib/fonts';
import ReduxProvider from './lib/providers/ReduxProvider';
import { CookiesProvider } from 'next-client-cookies/server';
import './globals.css';
import AuthProtectionProvider from './lib/providers/AuthProtectionProvider';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='uk'>
			<CookiesProvider>
				<ReduxProvider>
					<AuthProtectionProvider>
						<body className={clsx(inter, 'bg-mainBg')}>{children}</body>
					</AuthProtectionProvider>
				</ReduxProvider>
			</CookiesProvider>
		</html>
	);
}
