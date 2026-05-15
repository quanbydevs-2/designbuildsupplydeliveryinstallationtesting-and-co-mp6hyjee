import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { Toaster } from "@/core/components/ui/sonner"
import { ThemeProvider } from "@/core/context/theme-provider"
import { QueryProvider } from "@/services/tanstack-query/provider"
import "@/core/styles/globals.css"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Tubod Municipality Agriculture Information System",
  description: "A comprehensive digital platform designed to modernize agricultural management operations within the Municipality of Tubod, Surigao del Norte. The system serves as a centralized hub for farmer registration, crop monitoring, livestock management, resource allocation, and agricultural data analytics to support evidence-based decision-making and improve agricultural productivity in the region.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Toaster richColors closeButton />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}