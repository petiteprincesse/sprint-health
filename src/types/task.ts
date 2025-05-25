export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskStatus = string;

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignee?: string;
  dueDate?: Date;
  tags: string[];
  createdAt: Date;
}

export interface Column {
  id: TaskStatus;
  title: string;
}