import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { ChevronsUpDown, LogOut } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b fixed top-0 left-0 right-0 bg-background z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sprint Health /just-do-iT/</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Avatar className="h-8 w-8 rounded-lg mr-2">
                  <AvatarImage src="/avatars/admin.jpg" alt="admin" />
                  <AvatarFallback className="rounded-lg">A</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Admin</span>
                  <span className="truncate text-xs">admin@test.com</span>
                </div>
                <ChevronsUpDown className="size-4 ml-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              side={"bottom"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src="/avatars/admin.jpg" alt="admin" />
                    <AvatarFallback className="rounded-lg">A</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Admin</span>
                    <span className="truncate text-xs">admin@test.com</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuGroup></DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="w-4 h-4" />
                <span className="ml-2">Выход</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/*<Button onClick={() => handleAddTask('backlog')} className="text-white">*/}
          {/*  <Plus className="h-4 w-4 mr-2" />*/}
          {/*  Add Task*/}
          {/*</Button>*/}
        </div>
      </div>
    </header>
  );
};
