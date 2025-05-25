import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Task, Column, TaskStatus } from '@/types/task';
import { TaskCard } from './TaskCard';
import { ColumnHeader } from './ColumnHeader';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface KanbanBoardProps {
  tasks: Task[];
  columns: Column[];
  onColumnsChange: (columns: Column[]) => void;
  onTaskMove: (taskId: string, newStatus: TaskStatus) => void;
  onAddTask: (status: TaskStatus) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

export function KanbanBoard({ 
  tasks, 
  columns,
  onColumnsChange,
  onTaskMove, 
  onAddTask, 
  onEditTask,
  onDeleteTask
}: KanbanBoardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const { toast } = useToast();

  const onDragEnd = (result: any) => {
    setIsDragging(false);
    const { source, destination, type } = result;

    if (!destination) return;

    // Handle column reordering
    if (type === 'column') {
      if (source.index === destination.index) return;

      const newColumns = Array.from(columns);
      const [removed] = newColumns.splice(source.index, 1);
      newColumns.splice(destination.index, 0, removed);
      onColumnsChange(newColumns);
      return;
    }

    // Handle task movement
    const { draggableId } = result;
    const newStatus = destination.droppableId as TaskStatus;
    onTaskMove(draggableId, newStatus);
  };

  const handleAddColumn = () => {
    if (newColumnTitle.trim()) {
      const newColumnId = newColumnTitle.toLowerCase().replace(/\s+/g, '-');
      
      if (columns.some(col => col.id === newColumnId)) {
        toast({
          title: "Column already exists",
          description: "Please choose a different name for your column.",
          variant: "destructive",
        });
        return;
      }

      onColumnsChange([...columns, { id: newColumnId, title: newColumnTitle.trim() }]);
      setNewColumnTitle('');
      setIsAddingColumn(false);
      
      toast({
        title: "Column added",
        description: `${newColumnTitle.trim()} column has been created.`,
      });
    }
  };

  const handleDeleteColumn = (columnId: string) => {
    const tasksInColumn = tasks.filter(task => task.status === columnId);
    if (tasksInColumn.length === 0) {
      onColumnsChange(columns.filter(col => col.id !== columnId));
      toast({
        title: "Column deleted",
        description: "The column has been removed from the board.",
      });
    }
  };

  return (
    <div className="h-full overflow-x-auto">
      <DragDropContext
        onDragStart={() => setIsDragging(true)}
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId="columns" direction="horizontal" type="column">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="inline-flex gap-4 h-full pb-4"
            >
              {columns.map((column, index) => (
                <Draggable
                  key={column.id}
                  draggableId={`column-${column.id}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="min-w-[270px] max-w-[270px] h-full"
                    >
                      <div
                        className={cn(
                          "bg-muted/30 rounded-lg p-4 h-full flex flex-col border-2 border-gray-100",
                          snapshot.isDragging && "ring-2 ring-primary"
                        )}
                      >
                        <div {...provided.dragHandleProps}>
                          <ColumnHeader
                            column={column}
                            tasksCount={tasks.filter(task => task.status === column.id).length}
                            onAddTask={() => onAddTask(column.id)}
                            onDeleteColumn={() => handleDeleteColumn(column.id)}
                          />
                        </div>
                        <Droppable droppableId={column.id} type="task">
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              className={cn(
                                'flex-1 overflow-y-auto min-h-[200px] transition-colors',
                                snapshot.isDraggingOver && 'bg-muted/50 rounded-lg'
                              )}
                            >
                              {tasks
                                .filter((task) => task.status === column.id)
                                .map((task, index) => (
                                  <Draggable
                                    key={task.id}
                                    draggableId={task.id}
                                    index={index}
                                  >
                                    {(provided) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <TaskCard 
                                          task={task} 
                                          onEdit={onEditTask}
                                        />
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <div className="h-full">
                {isAddingColumn ? (
                  <div className="bg-muted/30 rounded-lg pt-1 pr-1">
                    <Input
                      placeholder="Column name"
                      value={newColumnTitle}
                      onChange={(e) => setNewColumnTitle(e.target.value)}
                      className="mb-2"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleAddColumn();
                        } else if (e.key === 'Escape') {
                          setIsAddingColumn(false);
                          setNewColumnTitle('');
                        }
                      }}
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <Button
                        onClick={handleAddColumn}
                        disabled={!newColumnTitle.trim()}
                        className="text-white"
                      >
                        Add
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsAddingColumn(false);
                          setNewColumnTitle('');
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full h-12 border-dashed"
                    onClick={() => setIsAddingColumn(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Column
                  </Button>
                )}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}