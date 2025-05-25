import { Button } from '@/components/ui/button';
import { Column } from '@/types/task';
import { Plus, MoreVertical, GripVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface ColumnHeaderProps {
  column: Column;
  tasksCount: number;
  onAddTask: () => void;
  onDeleteColumn: () => void;
}

export function ColumnHeader({ column, tasksCount, onAddTask, onDeleteColumn }: ColumnHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4 group">
      <div className="flex items-center gap-1">
        <GripVertical className="h-5 w-5 text-muted-foreground/50 invisible group-hover:visible cursor-grab active:cursor-grabbing" />
        <h2 className="font-semibold text-sm text-muted-foreground line-clamp-2">
          {column.title}
        </h2>
        <span className="text-sm text-muted-foreground">({tasksCount})</span>
      </div>
      <div className="flex items-center gap-1 ml-3">
        <Button
          size="icon"
          className="h-8 w-8 text-white bg-primary"
          onClick={onAddTask}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              className="h-8 w-8 text-white bg-primary"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem
                  className="text-destructive"
                  onSelect={(e) => e.preventDefault()}
                >
                  Delete Column
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete {column.title} column?</AlertDialogTitle>
                  <AlertDialogDescription>
                    {tasksCount > 0 
                      ? `This column contains ${tasksCount} tasks. Please move or delete them first.`
                      : 'This action cannot be undone. The column will be permanently deleted.'}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={onDeleteColumn}
                    disabled={tasksCount > 0}
                    className="text-white"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}