import React, { useState } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CreatePlaylistPopupProps {
  onCreate: (name: string) => void;
}

// <CreatePlaylistpopup onCreate={()=>{}}/>

export const CreatePlaylistPopup = ({ onCreate }:CreatePlaylistPopupProps) => {
  const [playlistName, setPlaylistName] = useState("");

  const handleCreate = () => {
    if (playlistName.trim()) {
      onCreate(playlistName);
      setPlaylistName("");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-[90%] min-w-40 text-sm font-semibold hover:bg-blue-600 max-w-64 mt-4 rounded-md">Create New Playlist</Button> 
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Create New Playlist</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Input
            type="text"
            placeholder="Enter playlist name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            className="text-gray-950"
          />
        </div>
        <SheetFooter className="pt-4 gap-2">
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button onClick={handleCreate}>Create</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
