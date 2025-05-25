import { Calendar, ChartColumn, LayoutList } from "lucide-react";
import { RouteNames } from "@/app/providers/router/config/routeConfig.ts";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils.ts";

// Menu items.
const items = [
  {
    title: "Дашборд",
    url: RouteNames.DASHBOARD,
    icon: ChartColumn,
  },
  {
    title: "Доска",
    url: RouteNames.KANBAN,
    icon: Calendar,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  return (
    <div className="fixed h-screen flex flex-col pt-2 px-4 border-r w-48 justify-between">
      <div>
        {items.map((item) => (
          <div key={item.title} className="flex py-4">
            <a
              href={item.url}
              className={cn(
                item.url === current
                  ? "flex items-center text-sm no-underline font-normal w-full hover:text-indigo-500 text-indigo-500"
                  : "flex items-center text-black text-sm no-underline font-normal w-full hover:text-indigo-500/75",
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="pl-4">{item.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
