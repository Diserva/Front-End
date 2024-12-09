'use client';

import Login from './Login';
import { useGetUserWithExistingTokenQuery } from '../lib/redux/serverApi';
import { useEffect, useState } from 'react';
import GoIn from './GoIn';
import { store } from '../lib/redux/store';
import { writeAndLoginUser } from '../lib/redux/userSlice';
import Button from '../components/utils/Button';

function LoadingBtn() {
	return <Button className='px-14'>Loading...</Button>;
}

function useDataHandler() {
	const [output, setOutput] = useState(<LoadingBtn />);

	const { data, isError } = useGetUserWithExistingTokenQuery(undefined);

	useEffect(() => {
		if (data) {
			store.dispatch(writeAndLoginUser(data));
			setOutput(<GoIn />);
		} else if (isError) {
			setOutput(<Login />);
		}
	}, [data, isError]);

	return output;
}

export default function page() {
	const output = useDataHandler();

	return (
		<div className='w-full flex flex-col items-center justify-center gap-8 h-screen'>
			<h1 className='text-4xl text-white '>Раді бачити тебе!</h1>
			{output}
		</div>
	);
}
