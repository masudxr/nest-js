import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Todo } from '../todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private TodoRepository: Repository<Todo>,
  ) {}

  async getAll(): Promise<Todo[]> {
    return await this.TodoRepository.find();
  }

  async create(todo: Todo): Promise<Todo> {
    return await this.TodoRepository.save(todo);
  }

  async getOne(id: number): Promise<Todo> {
    console.log('id:', id);
    return await this.TodoRepository.findOneBy({ id });
  }

  async update(id: number, todo: Todo): Promise<UpdateResult> {
    return await this.TodoRepository.update(id, todo);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.TodoRepository.delete(id);
  }
}
