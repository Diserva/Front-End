import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Button({
	children,
	className,
	type
}: {
	children: ReactNode;
	className?: string;
	type?: 'submit';
}) {
	return (
		<button
			className={clsx(
				'bg-accent py-2 px-4 border-rounded flex justify-center items-center text-white hover:bg-blueButtonHover duration-200',
				className
			)}
			type={type}>
			{children}
		</button>
	);
}
