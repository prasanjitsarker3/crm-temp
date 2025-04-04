"use client"

import { adminRoutes } from "@/components/DashboardCustom/Admin/admin.routes"
import Header from "@/components/DashboardCustom/Admin/Header"
import Sidebar from "@/components/DashboardCustom/Admin/Sidebar"
import { useMediaQuery } from "@/hooks/useMobile"
import type React from "react"
import { useState } from "react"

interface AdminLayoutProps {
  children: React.ReactNode
  title?: string
  headerActions?: React.ReactNode
}

const AdminLayout = ({ children, title = "Dashboard", headerActions }: AdminLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleMobileSidebar = () => setMobileOpen(!mobileOpen)
  const toggleSidebarCollapse = () => setSidebarCollapsed(!sidebarCollapsed)

  return (
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
          title={title}
          onMenuClick={toggleMobileSidebar}
          showMenuButton={isMobile}
          actions={headerActions}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout

