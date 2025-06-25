import React from "react";
import { AppSidebar } from "@/components/layout/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Outlet, useLocation, Link } from "react-router-dom";

const generateBreadcrumbs = (pathname: string) => {
  const pathParts = pathname.split("/").filter(Boolean);

  return pathParts.map((part, index) => {
    const href = "/" + pathParts.slice(0, index + 1).join("/");
    const label = decodeURIComponent(part)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize

    return { label, href };
  });
};

export default function Layout() {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);

  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={crumb.href}>
                      <BreadcrumbItem>
                        {index === breadcrumbs.length - 1 ? (
                          <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink asChild>
                            <Link to={crumb.href}>{crumb.label}</Link>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator />
                      )}
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="mr-4">
              <ModeToggle />
            </div>
          </header>
          <main className="p-2">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
