import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '../todo.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('todo')
export class TodoController {
  constructor(private TodoService: TodoService) {}

  @Get()
  async getAll(): Promise<Todo[]> {
    return await this.TodoService.getAll();
  }

  @Post()
  async create(@Body() todo: Todo): Promise<Todo> {
    return await this.TodoService.create(todo);
  }
  @Get(':id')
  async getOne(@Param() id: number): Promise<Todo> {
    return await this.TodoService.getOne(id);
  }

  @Put(':id')
  async update(@Param() id: number, @Body() todo: Todo): Promise<UpdateResult> {
    return await this.TodoService.update(id, todo);
  }

  @Delete(':id')
  async delete(@Param() id: number): Promise<DeleteResult> {
    return await this.TodoService.delete(id);
  }
}
