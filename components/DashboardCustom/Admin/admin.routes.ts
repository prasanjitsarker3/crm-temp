import {
    BarChart3,
    Users,
    ShoppingCart,
    Settings,
    HelpCircle,
    LogOut,
    FileText,
    Bell,
    Package,
    PackagePlus,
    TrendingUp,
    PackageCheck,
  } from "lucide-react"
  
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
      subItems: [
        {
          icon: Package,
          label: "Product Management",
          href: "/admin/products/management",
        },
        {
          icon: PackagePlus,
          label: "New Product",
          href: "/admin/products/new",
        },
        {
          icon: TrendingUp,
          label: "Top Products",
          href: "/admin/products/top",
        },
        {
          icon: PackageCheck,
          label: "Return Products",
          href: "/admin/products/returns",
        },
      ],
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
  
  