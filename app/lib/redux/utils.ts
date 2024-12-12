import { cookies, headers } from 'next/headers';
import { z, ZodError, ZodSchema } from 'zod';
import { GuildsType } from '../definitions/apiRequests';

type TransformFunction = <T>(data: T) => T;

export function validate(schema: ZodSchema, transformData?: TransformFunction) {
	return (response: unknown): z.infer<typeof schema> => {
		const { success, data, error } = schema.safeParse(response);

		if (!success) {
			handleRequestError<ZodError>(error);
		}

		return typeof transformData === 'function'
			? transformData<z.infer<typeof schema>>(data)
			: data;
	};
}

export function handleRequestError<SpecificError extends Error>(
	error: SpecificError
) {
	const errorEntity = new Error(error.message);
	errorEntity.name = error.name;
	errorEntity.stack ??= error.stack;

	throw errorEntity;
}

export function sortArrayByIsBot(array: GuildsType) {
	return array.sort((a, b) => Number(a.isBot) - Number(b.isBot));
}


export async function prepareHeaders(headers: Headers) {
	// const cookieStore = await cookies();

	// const cookiesArray = cookieStore.getAll();

	// if (cookiesArray.length > 0) {
	// 	for (const { name, value } of cookiesArray) {
	// 		headers.set(name, value);
	// 	}
	// } else {
	// 	console.warn('found no cookies');
	// }

	return headers;
}
