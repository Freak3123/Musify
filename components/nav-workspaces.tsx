import { Plus } from "lucide-react"

import {
  Collapsible,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { MusicCard } from "./ui/card"

export function NavWorkspaces({
  workspaces,
}: {
  workspaces: {
    name: string
    pages: {
      name: string
      author: string
      url: string
      duration: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-base">
        <div className="w-full">
          Recently Played
        </div>
        <div className="flex justify-end w-full">
          <button className="flex justify-end hover:text-gray-950 dark:hover:text-gray-200 transition-all duration-300">
            See all
          </button>
        </div>
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {workspaces.map((workspace) => (
            <Collapsible key={workspace.name}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="">
                  <MusicCard name={workspace.name} />
                </SidebarMenuButton>

                <SidebarMenuAction showOnHover>
                  <Plus />
                </SidebarMenuAction>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
