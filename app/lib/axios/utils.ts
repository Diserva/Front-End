import { z, ZodSchema } from 'zod';
import { returnValidationError } from './errors';

export function validate(schema: ZodSchema) {
	return (response: unknown): z.infer<typeof schema> => {
		const { success, data, error } = schema.safeParse(response);

		if (!success) {
			throw returnValidationError(error);
		}

		return data;
	};
}

export function json(callback: CallableFunction) {
	return (data: string) => callback(JSON.parse(data));
}
