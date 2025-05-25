import { FC, ReactNode } from "react";
import { AppSidebar } from "@/components/Sidebar.tsx";
import { Header } from "@/components/Header.tsx";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex">
      <Header />
      <main className="container mx-auto mt-[64px] flex justify-center">
        <div className="flex h-full w-full">
          <AppSidebar />
          <div className="ml-56 flex-1 min-w-0 my-6 mx-6 overflow-y-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
