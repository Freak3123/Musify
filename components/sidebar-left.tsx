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
  const { toggleSidebar } = useSidebar()
  return (
    <Sidebar collapsible="icon" className="border-r-0" {...props}>
      <SidebarHeader>
            <div>
                <span className="text-2xl font-bold m-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    W
                </span>
                <button onClick={toggleSidebar} className='flex justify-end'>
                  <ListX className="w-6 h-6" />
                </button>
            </div>
        </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={sideNavitems}/>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
