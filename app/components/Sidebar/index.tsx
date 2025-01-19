import {
	Sidebar as SidebarContainer,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem
} from '@/components/ui/sidebar';

export default function Sidebar() {
	return (
		<SidebarContainer side='right' variant='floating'>
			<SidebarHeader />
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						<SidebarMenuItem>Hello, world</SidebarMenuItem>
						<SidebarMenuItem>Hello, world</SidebarMenuItem>
						<SidebarMenuItem>Hello, world</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</SidebarContainer>
	);
}
