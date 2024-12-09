import {
	BaseQueryApi,
	FetchArgs,
	fetchBaseQuery
} from '@reduxjs/toolkit/query';
import { z, ZodError, ZodSchema } from 'zod';

export function validate(schema: ZodSchema) {
	return (response: unknown): z.infer<typeof schema> => {
		const { success, data, error } = schema.safeParse(response);

		if (success) {
			return data;
		} else {
			handleRequestError<ZodError>(error);
		}
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

export async function createErrorHandlingWrapperForBaseQuery() {
      
}

export async function createBaseQueryWithErrorHandler({

	args,
	api,
	extraOptions
}: {
	args: string | FetchArgs;
	api: BaseQueryApi;
	extraOptions: Record<string, string>;
}) {
	try {
		const result = await fetchBaseQuery({ baseUrl: 'api' })(
			args,
			api,
			extraOptions
		);

		return result;
	} catch (error) {}
}
