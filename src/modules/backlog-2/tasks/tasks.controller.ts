import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto, TaskResponseDto } from '../dtos';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get workspace tasks' })
  listTasks(): TaskResponseDto[] {
    return this.tasksService.listTasks();
  }

  @Post()
  @ApiOperation({ summary: 'Create new task' })
  createTask(@Body() createTaskDto: CreateTaskDto): TaskResponseDto {
    return this.tasksService.createTask(createTaskDto);
  }
}
