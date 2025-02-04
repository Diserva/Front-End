import { Provider } from 'jotai';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainSection from './MainSection';

export default async function page() {
	return (
		<Provider>
			<Header />
			<MainSection />
			<Footer />
		</Provider>
	);
}
