
import clsx from 'clsx';
import { inter } from './lib/fonts';

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
