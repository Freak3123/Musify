'use client'
import * as React from "react";
import { NavUser } from "@/components/nav-user";
import { loadPlaylists, musicData, savePlaylists } from "@/Data";
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
import { data } from "@/Data";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet } from "./ui/sheet";
import { CreatePlaylistPopup } from "./Create-playlist-popup";


export function SidebarRight(props: React.ComponentProps<typeof Sidebar>) {
  const isMobile = useIsMobile();
  const [playlists, setPlaylists] = React.useState(() => loadPlaylists());
  const apnaMusicData=musicData.playlists;
  console.log(apnaMusicData)

  const handleCreatePlaylist = (playlistName: string) => {
    const newPlaylist = {
      name: playlistName,
      pages: [],
    };
    const updatedPlaylists = [...playlists, newPlaylist];
    setPlaylists(updatedPlaylists);
    savePlaylists(updatedPlaylists);
    console.log(updatedPlaylists);
  };

  if (isMobile) {
    return null
  }
  return (
    <Sidebar collapsible="none" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>

      <SidebarContent className="gap-5 px-4">
        <NavRecentlyPlayed favorites={musicData.recents.slice(0,4)} />
        <NavWorkspaces workspaces={apnaMusicData.reverse()
          .slice(0,4)
        } 
          />

        <SidebarMenu>
          <SidebarMenuItem className="flex justify-center">
            <Sheet>
              <CreatePlaylistPopup onCreate={handleCreatePlaylist} />
            </Sheet>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
