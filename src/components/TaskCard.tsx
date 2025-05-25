import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import { Task } from '@/types/task';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
}

export function TaskCard({ task, onEdit }: TaskCardProps) {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  const priorityColorsBg = {
    low: 'bg-green-50',
    medium: 'bg-amber-50',
    high: 'bg-red-50',
  };

  return (
    <Card 
      className={cn(priorityColorsBg[task.priority], "mb-2 cursor-move hover:shadow-md transition-shadow")}
      onClick={(e) => {
        // Prevent opening dialog while dragging
        if (e.target === e.currentTarget || e.target instanceof HTMLDivElement) {
          onEdit(task);
        }
      }}
    >
      <CardHeader className="p-3 pb-0">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-medium text-sm line-clamp-5">{task.title}</h3>
          <Badge variant="secondary" className={cn(priorityColors[task.priority], "flex-shrink-0")}>
            {task.priority}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <p className="text-xs text-muted-foreground mb-3 line-clamp-5 ">{task.description}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {task.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {task.assignee && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <User className="h-3 w-3" />
              <span className="line-clamp-2 max-w-[100px]">{task.assignee}</span>
            </div>
          )}
          {task.dueDate && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <Calendar className="h-3 w-3" />
              <span>{format(task.dueDate, 'MMM d')}</span>
            </div>
          )}
          <div className="flex items-center gap-1 flex-shrink-0">
            <Clock className="h-3 w-3" />
            <span>{format(task.createdAt, 'MMM d')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}