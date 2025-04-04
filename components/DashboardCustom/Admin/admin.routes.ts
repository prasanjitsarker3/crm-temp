import { BarChart3, Users, ShoppingCart, Settings, HelpCircle, LogOut, FileText, Bell } from "lucide-react"

export const adminRoutes = () => [
  {
    icon: BarChart3,
    label: "Dashboard",
    href: "/admin",
    active: true,
  },
  {
    icon: Users,
    label: "Users",
    href: "/admin/users",
  },
  {
    icon: ShoppingCart,
    label: "Products",
    href: "/admin/products",
  },
  {
    icon: FileText,
    label: "Orders",
    href: "/admin/orders",
  },
  {
    icon: Bell,
    label: "Notifications",
    href: "/admin/notifications",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/admin/settings",
  },
  {
    icon: HelpCircle,
    label: "Help & Support",
    href: "/admin/help",
  },
  {
    icon: LogOut,
    label: "Logout",
    href: "/logout",
  },
]

