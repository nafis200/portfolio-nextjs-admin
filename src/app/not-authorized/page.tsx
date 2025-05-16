// app/not-authorized/page.tsx
"use client"
import { useEffect } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function NotAuthorized() {
  const router = useRouter()

  useEffect(() => {
    toast.error("You are not admin")
    setTimeout(() => {
      router.push("/")
    }, 2000)
  }, [router])

  return <p className="text-center mt-10 text-red-500">Redirecting...</p>
}
