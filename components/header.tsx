import Link from "next/link"
import { Settings, RefreshCw, MapPin } from "lucide-react"

const navigation = [
  { name: "Find Job", href: "/", current: true },
  { name: "Applied Jobs", href: "/applied-jobs", current: false },
  { name: "Messages", href: "/messages", current: false },
  { name: "Hiring", href: "/hiring", current: false },
  { name: "Community", href: "/community", current: false },
  { name: "FAQ", href: "/faq", current: false },
]

export function Header() {
  return (
    <header className="border-b border-[#2D3748] bg-[#171923]">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
               
              <span className="text-2xl font-bold text-white">
                <span className="font-light">ec</span>lipse
              </span>
            </div>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-sm ${
                      item.current
                        ? "border-b-2 border-white pb-4 font-medium text-white"
                        : "text-[#a0aec0] hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-[#a0aec0]">
            <MapPin className="mr-2 h-4 w-4" />
            New York, NY
          </div>
          <button className="rounded-full bg-[#2D3748] p-2 text-[#a0aec0] hover:text-white">
            <Settings className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-[#2D3748] p-2 text-[#a0aec0] hover:text-white">
            <RefreshCw className="h-5 w-5" />
          </button>
          <div className="h-8 w-8 rounded-full bg-[#2D3748]" />
        </div>
      </div>
    </header>
  )
}

