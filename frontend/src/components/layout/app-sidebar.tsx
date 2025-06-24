import * as React from "react";
import { useLocation } from "react-router-dom";
import {
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/layout/nav-main";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Navigation configuration
const getNavItems = (currentPath: string) => ({
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: currentPath === '/home' || currentPath === '/',
      items: [
        {
          title: "Analytics",
          url: "/home",
          isActive: currentPath === '/home' || currentPath === '/'
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: SquareTerminal,
      isActive: currentPath.startsWith('/users'),
      items: [
        {
          title: "All Users",
          url: "/users",
          isActive: currentPath === '/users'
        },
      ],
    },
  ],
});

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const { navMain } = getNavItems(location.pathname);
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg'>
              <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                <SquareTerminal className='size-4' />
              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>
                  Umesh Prajapati
                </span>
                <span className='truncate text-xs'>
                  Developer
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
