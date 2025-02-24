'use client'
import * as React from "react";
import { NavUser } from "@/components/nav-user";
import { musicData } from "@/Data";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavRecentlyPlayed } from "./nav-recentlyPlayed";
import { NavWorkspaces } from "./nav-workspaces";
import { Button } from "./ui/button";
import { data } from "@/Data";
import { useIsMobile } from "@/hooks/use-mobile";


export function SidebarRight(props: React.ComponentProps<typeof Sidebar>) {
  const isMobile = useIsMobile();
  if (isMobile) {
    return null
  }
  return (
    <Sidebar collapsible="none" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>

      <SidebarContent className="gap-5 px-4">
        <NavRecentlyPlayed favorites={musicData.recents.slice(6)} />
        <NavWorkspaces workspaces={musicData.playlists.slice(1)} />

        <SidebarMenu>
          <SidebarMenuItem className="flex justify-center">
            <Button className="w-[90%] text-sm font-semibold hover:bg-blue-600 max-w-64 mt-4 rounded-md">Create New Playlist</Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
