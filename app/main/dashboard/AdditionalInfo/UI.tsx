export function AdditionalInfoUI({
	amountOfServers,
	postfix,
	loadTime
}: {
	amountOfServers: number;
	postfix: string;
	loadTime: string;
}) {
	return (
		<section className='additional-info-func'>
			<h3>{`${amountOfServers} ${postfix}`}</h3>
			<h3>{loadTime} секунд</h3>
		</section>
	);
}
