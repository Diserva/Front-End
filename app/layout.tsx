import clsx from 'clsx';
import { inter } from './lib/fonts';
import ReduxProvider from './lib/providers/ReduxProvider';
import './globals.css';
// import { store } from './lib/redux/store';
// import { serverApi } from './lib/redux/serverApi';
// import { cookies } from 'next/headers';
// import { throwIfGetUserError } from './lib/errorsFactory';
// import { UserType } from './lib/definitions/apiRequests';

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='uk'>
			<body className={clsx(inter, 'bg-mainBg')}>
				{/* <ReduxProvider> */}
				{children}
				{/* </ReduxProvider> */}
			</body>
		</html>
	);
}
