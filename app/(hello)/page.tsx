import Login from './Login';
import GoIn from './GoIn';
import { isLogined } from '../lib/actions';

export default async function page() {
	const displayedButton = (await isLogined()) ? <GoIn /> : <Login />;

	return (
		<div className='w-full flex flex-col items-center justify-center gap-8 h-screen'>
			<h1 className='text-4xl text-white '>Раді бачити тебе!</h1>
			{displayedButton}
		</div>
	);
}
