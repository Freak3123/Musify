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

// This is sample data.
const data = {
  user: {
    name: "Timothy Luce",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
}

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh border-l"
      {...props}
    >
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavRecentlyPlayed favorites={musicData.recents} />
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
