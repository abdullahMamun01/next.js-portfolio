import { Briefcase, Home } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen ">
      <aside className={`bg-[#0c1a2a] text-white w-64 min-h-screen p-4 `}>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 p-2 hover:bg-[#0f2744] rounded-md"
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/about"
                className="flex items-center space-x-2 p-2 hover:bg-[#0f2744] rounded-md"
              >
                <Briefcase className="h-5 w-5" />
                <span className="">About </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/portfolio-manage"
                className="flex items-center space-x-2 p-2 hover:bg-[#0f2744] rounded-md"
              >
                <Briefcase className="h-5 w-5" />
                <span className="">Portfolio Management</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/project"
                className="flex items-center space-x-2 p-2 hover:bg-[#0f2744] rounded-md"
              >
                <Briefcase className="h-5 w-5" />
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/blog"
                className="flex items-center space-x-2 p-2 hover:bg-[#0f2744] rounded-md"
              >
                <Briefcase className="h-5 w-5" />
                <span>Blogs</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/experiance"
                className="flex items-center space-x-2 p-2 hover:bg-[#0f2744] rounded-md"
              >
                <Briefcase className="h-5 w-5" />
                <span>Experiance</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="w-full">{children}</div>
    </div>
  );
}
