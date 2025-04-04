"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  active?: boolean
  collapsed?: boolean
  href?: string
  onClick?: () => void
  subItems?: {
    icon: React.ElementType
    label: string
    href?: string
    active?: boolean
  }[]
}

const SidebarItem = ({ icon: Icon, label, active, collapsed, href, onClick, subItems }: SidebarItemProps) => {
  const [expanded, setExpanded] = useState(false)
  const hasSubItems = subItems && subItems.length > 0

  const toggleExpand = (e: React.MouseEvent) => {
    if (hasSubItems) {
      e.preventDefault()
      setExpanded(!expanded)
    }
  }

  if (collapsed) {
    return (
      <div className="relative">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("w-full h-10 p-0 my-1", active && "bg-slate-700 text-white")}
                onClick={hasSubItems ? toggleExpand : onClick}
                {...(href && !hasSubItems ? { asChild: true } : {})}
              >
                {href && !hasSubItems ? (
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
              {hasSubItems && <span className="ml-1">{expanded ? "(expanded)" : "(collapsed)"}</span>}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Sub-items in collapsed mode */}
        {hasSubItems && expanded && (
          <div className="absolute left-full top-0 ml-2 w-48 rounded-md bg-slate-800 py-1 shadow-lg">
            {subItems.map((item, index) => {
              const SubIcon = item.icon
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white",
                    item.active && "bg-slate-700 text-white",
                  )}
                  {...(item.href ? { asChild: true } : {})}
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-3 w-full">
                      <SubIcon className="h-4 w-4" />
                      {item.label}
                    </a>
                  ) : (
                    <>
                      <SubIcon className="h-4 w-4" />
                      {item.label}
                    </>
                  )}
                </Button>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white",
          active && "bg-slate-700 text-white",
        )}
        onClick={hasSubItems ? toggleExpand : onClick}
        {...(href && !hasSubItems ? { asChild: true } : {})}
      >
        {href && !hasSubItems ? (
          <a href={href} className="flex items-center gap-3 w-full">
            <Icon className="h-5 w-5" />
            <span>{label}</span>
            {hasSubItems && (
              <span className="ml-auto">
                {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </span>
            )}
          </a>
        ) : (
          <>
            <Icon className="h-5 w-5" />
            <span>{label}</span>
            {hasSubItems && (
              <span className="ml-auto">
                {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </span>
            )}
          </>
        )}
      </Button>

      {/* Sub-items */}
      {hasSubItems && expanded && (
        <div className="ml-6 mt-1 border-l border-slate-700 pl-2">
          {subItems.map((item, index) => {
            const SubIcon = item.icon
            return (
              <Button
                key={index}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white",
                  item.active && "bg-slate-700 text-white",
                )}
                {...(item.href ? { asChild: true } : {})}
              >
                {item.href ? (
                  <a href={item.href} className="flex items-center gap-3 w-full">
                    <SubIcon className="h-4 w-4" />
                    {item.label}
                  </a>
                ) : (
                  <>
                    <SubIcon className="h-4 w-4" />
                    {item.label}
                  </>
                )}
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SidebarItem

