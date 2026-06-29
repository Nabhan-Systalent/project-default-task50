import { Injectable } from '@nestjs/common';
import { ProjectResponseDto } from '../dtos';

@Injectable()
export class ProjectsService {
  private projects: ProjectResponseDto[] = [
    { id: '1', name: 'S3 Integration' },
    { id: '2', name: 'Legacy Cleanup' }
  ];

  listProjects(): ProjectResponseDto[] {
    return this.projects;
  }

  deleteProject(id: string): void {
    this.projects = this.projects.filter(p => p.id !== id);
  }
}
