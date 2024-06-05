import { ReactNode } from "react";
import Sidebar from "../../components/Sidebar";
import Highlights from "./components/Highlights";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
      <Highlights />
    </div>
  );
}
