import Link from "next/link"
import { Settings, RefreshCw } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <nav className="border-b bg-white dark:bg-gray-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">Eclipse</span>
          </Link>
          <div className="hidden md:ml-10 md:flex md:space-x-8">
            <Link href="/jobs" className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Find Job
            </Link>
            <Link
              href="/messages"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Messages
            </Link>
            <Link
              href="/hiring"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Hiring
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Community
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              FAQ
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">New York, NY</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="rounded-full bg-gray-100 p-2 text-gray-500 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100">
              <Settings className="h-5 w-5" />
            </button>
            <button className="rounded-full bg-gray-100 p-2 text-gray-500 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100">
              <RefreshCw className="h-5 w-5" />
            </button>
            <ModeToggle />
            <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  )
}

