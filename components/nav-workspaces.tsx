import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MusicCard } from "./ui/card";

type NavWorkspacesProps = {
  workspaces: {
    name: string;
    pages: {
      name: string;
      author: string;
      url: string;
      duration: string;
      imageUrl?: string;
    }[];
  }[];
};

export function NavWorkspaces({ workspaces = [] }: NavWorkspacesProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="flex justify-between items-center text-base">
        <span>Recently Played</span>
        <button
          className="hover:text-gray-950 dark:hover:text-gray-200 transition-all duration-300"
          aria-label="See all recently played"
        >
          See all
        </button>
      </SidebarGroupLabel>

      <SidebarGroupContent>
        {workspaces.length > 0 ? (
          <SidebarMenu className="gap-2">
            {workspaces.map(({ name, pages }) =>
              pages.length > 0 ? (
                <SidebarMenuItem key={name}>
                    <MusicCard
                      name={pages[0].name}
                      singer={pages[0].author}
                      duration={pages[0].duration}
                      imageUrl={pages[0].imageUrl}
                    />
                  
                  
                </SidebarMenuItem>
              ) : null
            )}
          </SidebarMenu>
        ) : (
          <div className="text-gray-500 text-center py-4">
            No recently played music
          </div>
        )}
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
