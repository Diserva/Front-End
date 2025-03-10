import { getSpecificServerSettingsOptions } from '@/app/lib/axios/postman';

export default async function page({
	searchParams
}: {
	searchParams: Promise<{ 'server-name': string }>;
}) {
	const serverName = (await searchParams)['server-name'];

	const { data } = await getSpecificServerSettingsOptions(serverName);

	console.log({ data });

	return <div>page</div>;
}
