import { ReactNode } from "react";

export function GuildsContainer({ children }: { children: ReactNode }) {
	return (
		<section className='flex flex-col gap-2 max-md:w-9/12 max-sm:w-10/12;'>
			{children}
		</section>
	);
}
