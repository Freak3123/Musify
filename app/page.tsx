import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { ChevronLeft, ChevronRight, Search, Ellipsis } from 'lucide-react';
import { Input } from "@/components/ui/input"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Hero from "@/components/hero";
import Player from "@/components/player";

export default function Page() {
  return (
    <>
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <ChevronLeft/>
            <ChevronRight/>
            <Input placeholder="⌕ Search" className={"xl:w-[70%] lg:w-[50%]"} />
            <Ellipsis/>
          </div>
        </header>
        <div className="xl:m-4 flex justify-center">
        <Hero/>
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
    <Player/>
    </>
  )
}
