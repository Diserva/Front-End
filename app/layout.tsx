import clsx from 'clsx';
import { inter } from './lib/fonts';
import ReduxProvider from './lib/providers/ReduxProvider';
import AuthProtectionProvider from './lib/providers/AuthProtectionProvider';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<ReduxProvider>
				<AuthProtectionProvider>
					<body className={clsx(inter)}>{children}</body>
				</AuthProtectionProvider>
			</ReduxProvider>
		</html>
	);
}
