import { Injectable } from '@nestjs/common';
import { TaskResponseDto, CreateTaskDto } from './dto';

@Injectable()
export class TasksService {
  private tasks: { id: string; title: string }[] = [{ id: '1', title: 'Sample Task' }];

  async listTasks(): Promise<TaskResponseDto[]> {
    return this.tasks;
  }

  async createTask(data: CreateTaskDto): Promise<TaskResponseDto> {
    const newTask = { id: Date.now().toString(), ...data };
    this.tasks.push(newTask);
    return newTask;
  }
}
