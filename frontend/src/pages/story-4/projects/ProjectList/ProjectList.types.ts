export interface Project {
  id: string;
  name: string;
  description: string;
  updatedAt: string;
}

export interface ProjectListProps {
  projects: Project[];
  isLoading?: boolean;
  error?: string | null;
  onProjectClick: (id: string) => void;
}
