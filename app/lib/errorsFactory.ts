import { z } from 'zod';

const ErrorSchema = z.object({
	name: z.string(),
	message: z.string(),
	cause: z.unknown().optional(), // Бажано прибрати властивості optional для unknown і stack
	stack: z.string().optional()
});

export type ErrorFielsType = z.infer<typeof ErrorSchema>;

export class GeneralError extends Error {
	constructor(generalError: unknown) {
		super();

		const { data, success, error } = ErrorSchema.safeParse(generalError);

		if (success) {
			this.name = data.name;
			this.message = data.message;
			this.cause = data.cause;
			this.stack = data.stack;
		} else {
			const parseError = new Error(
				`you passed wrong type pararms to GeneralError factory, which is used for other, more specific error factories. Error message: ${error.message}`
			);
			parseError.name = error.name;
			parseError.cause = error;
			parseError.stack = error.stack;
			throw parseError;
		}
	}
	throwError() {
		throw this;
	}
}
