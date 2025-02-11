
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Portfolio Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen my-2">
      <div className="flex justify-between">
        <div className="w-[10%]">
          <Sidebar />
        </div>
        <div className="w-[90%] rounded-xl">{children}</div>
      </div>
    </div>
  );
}
