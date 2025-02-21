"use client"
import { ListX } from 'lucide-react';
import * as React from "react"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { sideNavitems } from "@/Data"
import { useSidebar } from "@/components/ui/sidebar"

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar, open } = useSidebar()
  return (
    <Sidebar collapsible="icon" width='18vw' className="border-r-0 " {...props}>
      <SidebarHeader>
        <div className={`flex ${!open&&"flex-col"}  m-2`}>
            <span className="text-4xl font-bold p-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              W
            </span>
          <div className={`flex  w-full justify-end items-center`}>
            <button onClick={toggleSidebar} className='flex justify-end pr-1'>
              <ListX className="w-6 h-6" />
            </button>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className='px-3'>
        <NavSecondary items={sideNavitems} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
