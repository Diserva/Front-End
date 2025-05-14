import clsx from 'clsx';
import { ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

function Btn({
	disabled,
	onCLick,
	children
}: {
	disabled: boolean;
	onCLick: () => void;
	children: ReactNode;
}) {
	return (
		<button
			className={clsx('pagination-section rounded-[4px] bg-navLayout', {
				'!bg-lightBg': disabled
			})}
			onClick={onCLick}
			aria-label='move back or forward'
			disabled={disabled}>
			{children}
		</button>
	);
}

export function BtnPrevUI({
	onClick,
	disabled
}: {
	onClick: () => void;
	disabled: boolean;
}) {
	return (
		<Btn onCLick={onClick} disabled={disabled}>
			<FaChevronLeft />
		</Btn>
	);
}

export function BtnNextUI({
	onClick,
	disabled
}: {
	onClick: () => void;
	disabled: boolean;
}) {
	return (
		<Btn onCLick={onClick} disabled={disabled}>
			<FaChevronRight />
		</Btn>
	);
}

export function CurrentPageUI({ page }: { page: number }) {
	return <section className='pagination-section'>{page}</section>;
}

