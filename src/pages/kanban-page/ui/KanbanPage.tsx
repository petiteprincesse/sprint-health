import {KanbanBoard} from "@/components/KanbanBoard.tsx";
import {useState} from "react";
import {Task, TaskStatus} from "@/types/task.ts";
import {TaskDialog} from "@/components/TaskDialog.tsx";

const KanbanPage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newTaskStatus, setNewTaskStatus] = useState<TaskStatus>('backlog');
    const [selectedTask, setSelectedTask] = useState<Task | undefined>();
    const [columns, setColumns] = useState([
        { id: 'backlog', title: 'Backlog' },
        { id: 'todo', title: 'To Do' },
        { id: 'in-progress', title: 'In Progress' },
        { id: 'done', title: 'Done' },
    ]);

    const handleTaskMove = (taskId: string, newStatus: TaskStatus) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
    };

    const handleAddTask = (status: TaskStatus) => {
        setNewTaskStatus(status);
        setSelectedTask(undefined);
        setIsDialogOpen(true);
    };

    const handleEditTask = (task: Task) => {
        setSelectedTask(task);
        setIsDialogOpen(true);
    };

    const handleDeleteTask = (taskId: string) => {
        setTasks((prev) => prev.filter((task) => task.id !== taskId));
    };

    const handleSaveTask = (taskData: Partial<Task>) => {
        if (selectedTask) {
            setTasks((prev) =>
                prev.map((task) =>
                    task.id === selectedTask.id ? { ...task, ...taskData } : task
                )
            );
        } else {
            const newTask: Task = {
                id: Math.random().toString(36).substr(2, 9),
                title: taskData.title || '',
                description: taskData.description || '',
                priority: taskData.priority || 'medium',
                status: taskData.status || 'backlog',
                assignee: taskData.assignee,
                tags: taskData.tags || [],
                createdAt: new Date(),
            };
            setTasks((prev) => [...prev, newTask]);
        }
    };


    return (
        <>
            <KanbanBoard
                tasks={tasks}
                onTaskMove={handleTaskMove}
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                columns={columns}
                onColumnsChange={setColumns}
            />
            <TaskDialog
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
                onSave={handleSaveTask}
                onDelete={handleDeleteTask}
                defaultStatus={newTaskStatus}
                task={selectedTask}
                columns={columns}
            />
        </>
    );
};

export default KanbanPage;
