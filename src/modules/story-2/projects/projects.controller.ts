import { Controller, Get, Delete, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectResponseDto } from '../tasks/dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async listProjects(): Promise<ProjectResponseDto[]> {
    return this.projectsService.listProjects();
  }

  @Delete(':id')
  async deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectsService.deleteProject(id);
  }
}
