import { Controller, Get, Delete, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { ProjectResponseDto } from '../dtos';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'List projects' })
  listProjects(): ProjectResponseDto[] {
    return this.projectsService.listProjects();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete project' })
  deleteProject(@Param('id') id: string): void {
    return this.projectsService.deleteProject(id);
  }
}
