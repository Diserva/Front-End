import { z, ZodSchema } from 'zod';
import { GeneralError } from '../errorsFactory';

function returnValidationError({ name, message, cause, stack }: z.ZodError) {
	const error = new GeneralError({
		name: `Zod response validation error;; ${name}`,
		message: `Error occured due to failure in validating query's response;; ${message} ${name}`,
		cause: `Response data is not compatible with given zod validation schema;; ${cause}`,
		stack
	});
	return error;
}

export function validate(schema: ZodSchema) {
	return (response: unknown): z.infer<typeof schema> => {
		const { success, data, error } = schema.safeParse(response);

		if (!success) {
			return returnValidationError(error);
		}

		return data;
	};
}

export function json(callback: CallableFunction) {
	return (data: string) => callback(JSON.parse(data));
}
