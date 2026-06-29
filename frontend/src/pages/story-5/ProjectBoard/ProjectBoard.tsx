'use client';

import React, { useState } from 'react';
import { ProjectBoardProps, Task } from './ProjectBoard.types';
import { columns } from './index';

export const ProjectBoard: React.FC<ProjectBoardProps> = ({ initialTasks }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const moveTask = (taskId: string, newStatus: Task['status']) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  };

  if (!tasks) return <div className="p-8 text-center">Loading board...</div>;

  return (
    <div className="flex gap-4 p-6 h-full overflow-x-auto bg-[var(--color-background-subtle)]">
      {columns.map((column) => (
        <div
          key={column.id}
          className="w-80 flex flex-col gap-4 bg-[var(--color-surface)] p-4 rounded-lg shadow-sm"
        >
          <h2 className="font-bold text-[var(--color-text-primary)]">{column.label}</h2>
          <div className="flex flex-col gap-2 min-h-[200px]">
            {tasks
              .filter((t) => t.status === column.id)
              .map((task) => (
                <div
                  key={task.id}
                  onClick={() => setSelectedTask(task)}
                  className="p-3 bg-[var(--color-background)] rounded border border-[var(--color-border)] cursor-pointer hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium text-[var(--color-text-primary)]">{task.title}</h3>
                </div>
              ))}
          </div>
        </div>
      ))}

      {selectedTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-[var(--color-surface)] p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{selectedTask.title}</h2>
            <p className="mb-6 text-[var(--color-text-secondary)]">{selectedTask.description}</p>
            <button
              onClick={() => setSelectedTask(null)}
              className="px-4 py-2 bg-[var(--color-primary)] text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
