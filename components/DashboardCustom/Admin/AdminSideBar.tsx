"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  active?: boolean
  collapsed?: boolean
  href?: string
  onClick?: () => void
}

const SidebarItem = ({ icon: Icon, label, active, collapsed, href, onClick }: SidebarItemProps) => {
  if (collapsed) {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn("w-full h-10 p-0 my-1", active && "bg-slate-700 text-white")}
              onClick={onClick}
              {...(href ? { asChild: true } : {})}
            >
              {href ? (
                <a href={href}>
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </a>
              ) : (
                <>
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </>
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" className="ml-1">
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-3 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white",
        active && "bg-slate-700 text-white",
      )}
      onClick={onClick}
      {...(href ? { asChild: true } : {})}
    >
      {href ? (
        <a href={href} className="flex items-center gap-3 w-full">
          <Icon className="h-5 w-5" />
          {label}
        </a>
      ) : (
        <>
          <Icon className="h-5 w-5" />
          {label}
        </>
      )}
    </Button>
  )
}

export default SidebarItem

