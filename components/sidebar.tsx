import Link from "next/link"
import { Home, MessageSquare, Users, HelpCircle, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const routes = [
  {
    label: "Find Job",
    icon: Home,
    href: "/",
    active: true,
  },
  {
    label: "Messages",
    icon: MessageSquare,
    href: "/messages",
    active: false,
  },
  {
    label: "Hiring",
    icon: Users,
    href: "/hiring",
    active: false,
  },
  {
    label: "Community",
    icon: Users,
    href: "/community",
    active: false,
  },
  {
    label: "FAQ",
    icon: HelpCircle,
    href: "/faq",
    active: false,
  },
]

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col border-r border-gray-800 bg-[#171923]">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">Eclipse</h1>
      </div>
      <div className="flex-1 space-y-1 p-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-x-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-gray-800 hover:text-white",
              route.active && "bg-gray-800 text-white",
            )}
          >
            <route.icon className="h-5 w-5" />
            {route.label}
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-800 p-4">
        <div className="flex items-center gap-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-800" />
          <div>
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-gray-400">john@example.com</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto">
            <Settings className="h-5 w-5 text-gray-400" />
          </Button>
        </div>
      </div>
    </div>
  )
}

