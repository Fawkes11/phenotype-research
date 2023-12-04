import Sidebar from "@/components/dashboard/sidebar.js"

export default function DashboardLayout({ children }) {
  return (
    <div>
        <Sidebar/>
      <main>{children}</main>
    </div>
  )
}
