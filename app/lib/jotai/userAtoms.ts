import { atom } from 'jotai';
import { UserType } from '../definitions/apiRequests';

export const userAtom = atom<UserType>();
export const userAvatarUrl = atom(get => {
	const user = get(userAtom);
	if (user) {
		return `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}`;
	}
});
