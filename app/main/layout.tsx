import { ReactNode } from 'react';
import { Provider } from 'jotai';
import { SidebarProvider } from '@/components/ui/sidebar';
import Sidebar from '../components/Sidebar';

export default function layout({ children }: { children: ReactNode }) {
	return (
		<Provider>
			<SidebarProvider defaultOpen={false}>
				<main className='flex flex-col items-center'>{children}</main>
				<Sidebar />
			</SidebarProvider>
		</Provider>
	);
}
