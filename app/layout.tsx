import { clsx } from "clsx"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { StackedLayout } from "@/components/catalyst/stacked-layout"
import Navbar from "@/components/layout/Navbar"
import Sidebar from "@/components/layout/Sidebar"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Andrew Kodkod — Engineering Manager / Tech Lead",
  description: "Discover Andrew Kodkod, an experienced Engineering Manager and Tech Lead specializing in web, mobile, and desktop app development. With nearly 20 years of expertise, Andrew excels in team leadership, agile methodologies, and delivering high-budget projects.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className={clsx("bg-white font-sans antialiased dark:bg-zinc-900 dark:text-white", inter.variable)}>
        <StackedLayout
          navbar={<Navbar />}
          sidebar={<Sidebar />}
        >
          {children}
        </StackedLayout>
      </body>
    </html>
  )
}
