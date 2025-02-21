import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react';
import { Input } from "@/components/ui/input"
import {
  SidebarProvider,
} from "@/components/ui/sidebar"
import Hero from "@/components/hero";
import Player from "@/components/player";

export default function Page() {
  return (
    <>
      <SidebarProvider width="18vw" className="">
        <div className="flex h-screen w-full overflow-hidden">
          {/* Left Sidebar */}
          <SidebarLeft className="shrink-0  w-[18vw]" />
          {/* Middle Content */}
          <div className="flex flex-1  flex-col overflow-hidden">
            {/* Sticky Header */}
            <header className="sticky top-0 p-4 z-10 bg-background flex items-center gap-2 px-3 ">
              <ChevronLeft />
              <ChevronRight />
              <Input placeholder="⌕ Search" className=" h-12 flex-1" />
              <Ellipsis />
            </header>

            <div className="flex-1 overflow-y-auto pb-[6rem] hide-scrollbar .hide-scrollbar::-webkit-scrollbar">
              <div className="xl:m-4 flex justify-center">
                <Hero />
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <SidebarRight className="w-[24vw] p-4 overflow-y-auto pb-[6rem] hide-scrollbar .hide-scrollbar::-webkit-scrollbar" />
        </div>
      </SidebarProvider>

      {/* Fixed Music Player */}
      <Player />
    </>
  );
}
