import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { cookies } from 'next/headers';
import { getGuilds, getUserWithExistingToken } from '../lib/axios/server';
import { Provider } from 'jotai';
import HydrateAtoms from '../lib/providers/HydrateAtoms';
import { GuildsType, UserType } from '../lib/definitions/apiRequests';
import BlurOnScreen from '../components/utils/BlurOnScreen';
import BlurOnScreenWhenNavShown from '../lib/providers/BlurOnScreen';





export default async function layout({ children }: { children: ReactNode }) {
	

	return (
		<Provider>
			<main className='flex flex-col items-center'>
				<Header />
				{children}
				<Footer />
			</main>
		</Provider>
	);
}
