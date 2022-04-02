import Header from "@/components/Header"
import AppShell from "@/components/AppShell"
import Dashboard from "@/components/Dashboard"

export default function Home() {
  return (
   <AppShell width="full" maxWidth="1280px" mx="auto" px={6} py={6}>
     <Dashboard />
   </AppShell>
  )
}
