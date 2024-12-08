import { IoIosSearch } from 'react-icons/io';
import Button from '../components/utils/Button';

export default function SearchBar() {
	return (
		<section
			role='search'
			className='flex justify-between px-6 h-20 items-center w-full bg-navLayout border-rounded select-none'>
			<div className='flex flex-1 gap-2 items-center'>
				<IoIosSearch color='white' className='w-[22px] h-[22px]' />
				<input
					type='text'
					className='w-full h-[60px] bg-transparent text-white outline-none'
					placeholder='пошук...'
				/>
			</div>
			<Button>Знайти</Button>
		</section>
	);
}
