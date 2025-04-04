"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/useMobile"

interface HeaderProps {
  title?: string
  onMenuClick?: () => void
  showMenuButton?: boolean
  actions?: React.ReactNode
  className?: string
  mobileOpen?: boolean
  setMobileOpen?: (open: boolean) => void
  collapsed?: boolean
  setCollapsed?: (collapsed: boolean) => void
}

const Header = ({
  title = "Dashboard",
  onMenuClick,
  showMenuButton = true,
  actions,
  className,
  mobileOpen = false,
  setMobileOpen,
  collapsed = false,
  setCollapsed,
}: HeaderProps) => {
  const [internalCollapsed, setInternalCollapsed] = useState(collapsed)
  const isMobile = useMediaQuery("(max-width: 768px)")
  console.log("Action Check", actions)

  // Sync internal state with props
  useEffect(() => {
    setInternalCollapsed(collapsed)
  }, [collapsed])

  const toggleCollapse = () => {
    if (setCollapsed) {
      setCollapsed(!collapsed)
    } else {
      setInternalCollapsed(!internalCollapsed)
    }
  }

  const toggleMobile = () => {
    if (setMobileOpen) {
      setMobileOpen(!mobileOpen)
    }
  }

  return (
    <header className={cn("flex h-16 items-center justify-between border-b bg-white px-6", className)}>
      <div className="flex items-center gap-4">
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={toggleCollapse}
          className={cn(
            "h-6 w-6 rounded-full text-red-700 border border-slate-600 bg-slate-800 p-0 hidden md:flex cursor-pointer",
            collapsed ? "rotate-180" : "",
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {actions && <div className="flex items-center gap-4">{actions}</div>}
    </header>
  )
}

export default Header

