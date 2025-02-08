import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { JobProvider } from "@/contexts/JobContext"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eclipse - Job Board",
  description: "Find your next opportunity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <JobProvider>
          <div className="min-h-screen bg-[#171923]">
            <Header />
            <main className="px-6 py-8">{children}</main>
          </div>
        </JobProvider>
      </body>
    </html>
  )
}

