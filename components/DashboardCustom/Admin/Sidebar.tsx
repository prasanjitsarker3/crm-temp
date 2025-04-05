"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMobile";
import { TooltipProvider } from "@/components/ui/tooltip";
import SidebarItem from "./AdminSideBar";
import { usePathname } from "next/navigation";

interface SidebarProps {
  routes: {
    icon: React.ElementType;
    label: string;
    href?: string;
    active?: boolean;
    subItems?: {
      icon: React.ElementType;
      label: string;
      href?: string;
      active?: boolean;
    }[];
  }[];
  user?: {
    name: string;
    email: string;
    image?: string;
    fallback?: string;
  };
  title?: string;
  logo?: React.ReactNode;
  mobileOpen?: boolean;
  setMobileOpen?: (open: boolean) => void;
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

const Sidebar = ({
  routes,
  user = {
    name: "Admin User",
    email: "admin@example.com",
    fallback: "AU",
  },
  title = "Admin Panel",
  logo = <BarChart3 className="h-6 w-6" />,
  mobileOpen = false,
  setMobileOpen,
  collapsed = false,
  setCollapsed,
}: SidebarProps) => {
  const [internalCollapsed, setInternalCollapsed] = useState(collapsed);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();

  const processedRoutes = routes.map((route) => {
    const isRouteActive = pathname === route.href;

    let hasActiveChild = false;
    const processedSubItems = route.subItems?.map((subItem) => {
      const isSubItemActive = pathname === subItem.href;
      if (isSubItemActive) {
        hasActiveChild = true;
      }
      return {
        ...subItem,
        active: isSubItemActive,
      };
    });

    return {
      ...route,
      active: isRouteActive || hasActiveChild,
      subItems: processedSubItems,
    };
  });

  useEffect(() => {
    setInternalCollapsed(collapsed);
  }, [collapsed]);

  const toggleMobile = () => {
    if (setMobileOpen) {
      setMobileOpen(!mobileOpen);
    }
  };

  const isCollapsed = setCollapsed ? collapsed : internalCollapsed;

  return (
    <TooltipProvider>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 bg-slate-800 text-white transition-all duration-300 ease-in-out md:relative md:translate-x-0",
          isMobile && !mobileOpen ? "-translate-x-full" : "translate-x-0",
          isCollapsed ? "w-16" : " w-56 2xl:w-64"
        )}
      >
        {/* Sidebar Header */}
        <div
          className={cn(
            "flex h-16 items-center border-b border-slate-700",
            isCollapsed ? "justify-center px-0" : "justify-between px-4"
          )}
        >
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              {logo}
              <h1 className="text-xl font-bold">{title}</h1>
            </div>
          )}
          {isCollapsed && logo}
          {isMobile && !isCollapsed && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobile}
              className="md:hidden"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className={cn("py-4", isCollapsed ? "px-1" : "px-3")}>
            <div className="space-y-1">
              {processedRoutes?.map((route, index) => (
                <SidebarItem
                  key={index}
                  icon={route.icon}
                  label={route.label}
                  active={route.active}
                  collapsed={isCollapsed}
                  href={route.href}
                  subItems={route.subItems}
                />
              ))}
            </div>
          </div>
        </ScrollArea>

        {/* User Profile */}
        {user && (
          <div
            className={cn(
              "absolute bottom-0 w-full border-t border-slate-700",
              isCollapsed ? "p-2 flex justify-center" : "p-4"
            )}
          >
            {isCollapsed ? (
              <Avatar>
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>{user.fallback}</AvatarFallback>
              </Avatar>
            ) : (
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.fallback}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-slate-400">{user.email}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;
