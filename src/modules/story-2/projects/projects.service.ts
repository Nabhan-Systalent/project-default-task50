import { Injectable } from '@nestjs/common';
import { ProjectResponseDto } from './dto';

@Injectable()
export class ProjectsService {
  private projects: { id: string; name: string }[] = [{ id: 'p1', name: 'Main Project' }];

  async listProjects(): Promise<ProjectResponseDto[]> {
    return this.projects;
  }

  async deleteProject(id: string): Promise<void> {
    this.projects = this.projects.filter(p => p.id !== id);
  }
}
