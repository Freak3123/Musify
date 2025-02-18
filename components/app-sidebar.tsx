import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { side_fea, side_library } from "@/Data/index"
import Image from "next/image"
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_MOBILE } from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar >
        <SidebarHeader>
            <div>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    W
                </span>
            </div>
        </SidebarHeader>
      <SidebarContent className="m-4">
        <SidebarGroup>
          <SidebarGroupLabel>FEATURES</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {side_fea.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>LIBRARY</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {side_library.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex justify-center">
        <Image src="/image.png" alt="logo" width={600} height={600} className={`max-h-[${SIDEBAR_WIDTH_MOBILE}]} max-w-[${SIDEBAR_WIDTH_MOBILE}]} md:max-h-[${ SIDEBAR_WIDTH}] md:max-W-[${ SIDEBAR_WIDTH}] overflow-hidden`}/>
      </SidebarFooter>
    </Sidebar>
  )
}
