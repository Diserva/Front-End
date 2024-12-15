import { z, ZodSchema } from 'zod';

type TransformFunction = <T>(data: T) => T;
export function validate(schema: ZodSchema, transformData?: TransformFunction) {
	return (response: unknown): z.infer<typeof schema> => {
		const { success, data } = schema.safeParse(response);

		if (!success) {
			throw 'error';
		}

		return typeof transformData === 'function'
			? transformData<z.infer<typeof schema>>(data)
			: data;
	};
}

export function json(callback: CallableFunction) {
	return (data: string) => callback(JSON.parse(data));
}
