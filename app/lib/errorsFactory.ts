import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { extend } from 'fp-ts/lib/pipeable';
import { z, ZodError } from 'zod';

const ErrorSchema = z.object({
	name: z.string(),
	message: z.string(),
	cause: z.unknown().optional(), // Бажано прибрати властивості optional для unknown і stack
	stack: z.string().optional()
});

export type ErrorFielsType = z.infer<typeof ErrorSchema>;

class GeneralError extends Error {
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
	returnError() {
		throw this;
	}
}

export class SafeZodError extends GeneralError {
	constructor(zodError: ZodError) {
		super(zodError);
	}
}

export class RtkQueryError extends GeneralError {
	constructor(fetchError: FetchBaseQueryError | SerializedError | undefined) {
		super(fetchError);
	}
}

export function throwIfTokenError(
	fetchError: FetchBaseQueryError | SerializedError | undefined
) {
	if (fetchError) {
		const error = new RtkQueryError(fetchError);
		throw error.returnError();
	}
}
