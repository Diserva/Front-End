import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Button({
	children,
	className
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<button
			className={clsx(
				'bg-accent py-2 px-4 border-rounded flex justify-center items-center text-white hover:bg-blueButtonHover duration-200',
				className
			)}>
			{children}
		</button>
	);
}
