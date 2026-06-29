import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, TaskResponseDto } from './dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async listTasks(): Promise<TaskResponseDto[]> {
    return this.tasksService.listTasks();
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskResponseDto> {
    return this.tasksService.createTask(createTaskDto);
  }
}
