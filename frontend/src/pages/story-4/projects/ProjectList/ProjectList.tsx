import { ProjectListProps } from './ProjectList.types';

export const ProjectList = ({ projects, isLoading, error, onProjectClick }: ProjectListProps) => {
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-gray-200 rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 bg-red-50 rounded-md border border-red-200">
        Error loading projects: {error}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No projects found. Create one to get started!
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4">
      {projects.map((project) => (
        <li
          key={project.id}
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => onProjectClick(project.id)}
        >
          <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
          <p className="text-xs text-gray-400 mt-4">Updated {new Date(project.updatedAt).toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
  );
};
