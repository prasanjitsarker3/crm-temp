"use client";

import { adminRoutes } from "@/components/DashboardCustom/Admin/admin.routes";
import Header from "@/components/DashboardCustom/Admin/Header";
import Sidebar from "@/components/DashboardCustom/Admin/Sidebar";
import { useMediaQuery } from "@/hooks/useMobile";
import { ThemeProvider } from "next-themes";
import type React from "react";
import { useState } from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminCustomLayout = ({
  children,
}: AdminLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMobileSidebar = () => setMobileOpen(!mobileOpen);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar
          routes={adminRoutes()}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Fixed Header */}
          <Header
            onMenuClick={toggleMobileSidebar}
            showMenuButton={isMobile}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            collapsed={sidebarCollapsed}
            setCollapsed={setSidebarCollapsed}
          />

          {/* Scrollable Content */}
          <main className="flex-1 overflow-auto p-6">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AdminCustomLayout;
