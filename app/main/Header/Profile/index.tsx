import {
	doHydrationListReqWithCreds,
	getUserHydrationList
} from '@/app/lib/axios/deffered/dashboard';
import { ProfileSectionUI } from './UI';
import HydrateUserAtoms from '@/app/lib/providers/HydrateUserAtoms';

export default async function ProfileSection() {
	const hydrationDataList = await doHydrationListReqWithCreds(
		getUserHydrationList
	);

	return (
		<HydrateUserAtoms hydrationDataList={hydrationDataList}>
			<ProfileSectionUI />
		</HydrateUserAtoms>
	);
}
