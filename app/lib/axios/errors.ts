import { z, ZodError } from 'zod';
import { GeneralError } from '../errorsFactory';

export function returnValidationError({
	name,
	message,
	cause,
	stack
}: z.ZodError) {
	const error = new GeneralError({
		name: `Zod response validation error;; ${name}`,
		message: `Error occured due to failure in validating query's response;; ${message}`,
		cause: `Response data is not compatible with given zod validation schema;; ${cause}`,
		stack
	});
	return error;
}
