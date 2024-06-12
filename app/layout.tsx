import { clsx } from "clsx"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Andrew Kodkod",
  description: "", // TODO: Add a description
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx("font-sans antialiased", inter.variable)}>
        {children}
      </body>
    </html>
  )
}
