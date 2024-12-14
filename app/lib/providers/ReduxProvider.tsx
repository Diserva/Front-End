'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';

export default function StoreProvider<T>({
	getStore,
	initState,
	children
}: {
	getStore: (initState: T) => Store;
	initState: T;
	children: ReactNode;
}) {
	const storeRef = useRef<Store>();
	storeRef.current ??= getStore(initState);

	return <Provider store={storeRef.current}>{children}</Provider>;
}
