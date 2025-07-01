import * as React from "react";
import { useLocation } from "react-router-dom";
import { LayoutDashboard, User, UsersRound } from "lucide-react";

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
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

// Navigation configuration
const getNavItems = (currentPath: string) => ({
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: currentPath === "/home" || currentPath === "/",
      items: [
        {
          title: "Analytics",
          url: "/home",
          isActive: currentPath === "/home" || currentPath === "/",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: UsersRound,
      isActive: currentPath.startsWith("/users"),
      items: [
        {
          title: "All Users",
          url: "/users",
          isActive: currentPath === "/users",
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
            <SidebarMenuButton size="lg">
              <Avatar className="rounded-lg">
                <AvatarImage
                  src="/logo3.png"
                  alt="@evilrabbit"
                  className="size-12 rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  Admin Panel
                </span>
                <span className="truncate text-xs">
                  Effortless Administration
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
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
