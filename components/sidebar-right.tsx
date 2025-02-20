import * as React from "react"
import { NavUser } from "@/components/nav-user"
import { musicData } from "@/Data"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavRecentlyPlayed } from "./nav-recentlyPlayed"
import { NavWorkspaces } from "./nav-workspaces"
import { Button } from "./ui/button"
import { data } from "@/Data"

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className=" xl:w-[20%] lg:w-[30%]  right-0 top-0  lg:flex  h-svh border-l"
      {...props}
    >
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavRecentlyPlayed favorites={musicData.recents.slice(6)} />
        <NavWorkspaces workspaces={musicData.playlists} />
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-center">
              <Button className="w-[85%] text-base rounded-lg">
                Create New Playlist
              </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
