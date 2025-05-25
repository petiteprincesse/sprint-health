import {KanbanPage} from "@/pages/kanban-page";
import {DashboardPage} from "@/pages/dashboard-page";
import {TasksPage} from "@/pages/tasks-page";

export enum RouteNames {
    DASHBOARD = "/dashboard",
    KANBAN = "/board",
    TASKS = "/tasks",
    NAVIGATE = "*",
}

export const routes = [
    { path: RouteNames.DASHBOARD, component: DashboardPage },
    { path: RouteNames.KANBAN, component: KanbanPage },
    { path: RouteNames.TASKS, component: TasksPage },
];
