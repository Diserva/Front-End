import { isLogined } from '../../lib/actions';
import GoInAsAuthorized from '../GoInAsAuthorized';
import LoginUI from '../Login';
import LandingUI from './UI';

export default async function page() {
	const displayedButton = (await isLogined()) ? (
		<GoInAsAuthorized />
	) : (
		<LoginUI />
	);

	return <LandingUI displayedButton={displayedButton} />;
}
