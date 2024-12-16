'use client';

import React, { ReactNode, useRef } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { initDashboard } from '../redux/CreateDashboardStore';
import { StoreInitState } from '../redux/store';
import { initUser } from '../redux/CreateUserStore';

export default function StoreProvider<T>({
	getStore,
	initState,
	children
}: {
	getStore: (initState: StoreInitState) => Store;
	initState: StoreInitState;
	children: ReactNode;
}) {
	const storeRef = useRef<Store>();
	storeRef.current ??= getStore(initState);

	return (
		<Provider store={storeRef.current}>
			<InitializeSlices initState={initState}>{children}</InitializeSlices>
		</Provider>
	);
}

function InitializeSlices({
	children,
	initState
}: {
	children: ReactNode;
	initState: StoreInitState;
}) {
	const dispatch = useDispatch();
	dispatch(initDashboard(initState.dashboardInitState));
	dispatch(initUser(initState.userInitState));

	return <>{children}</>;
}
