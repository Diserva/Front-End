'use client';

export default function error({
	error,
	reset
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	console.error(error);

	return (
		<main>
			<h2>Authorization went wrong!</h2>
			<p>{error.digest}</p>

			{/* <button>try again!</button> */}
		</main>
	);
}
