import Link from "next/link"
import { Button } from "@/core/components/ui/button"

export default function HomePage() {
  return (
    <div className="text-center space-y-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground">
        T
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tubod Municipality Agriculture Information System</h1>
        <p className="mt-2 text-muted-foreground">A comprehensive digital platform designed to modernize agricultural management operations within the Municipality of Tubod, Surigao del Norte. The system serves as a centralized hub for farmer registration, crop monitoring, livestock management, resource allocation, and agricultural data analytics to support evidence-based decision-making and improve agricultural productivity in the region.</p>
      </div>
      <div className="flex gap-3 justify-center">
        <Link href="/login"><Button>Sign In</Button></Link>
        <Link href="/register"><Button variant="outline">Register</Button></Link>
      </div>
    </div>
  )
}