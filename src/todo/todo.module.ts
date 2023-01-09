import { Module } from '@nestjs/common';
import { TodoService } from './service/todo.service';
import { TodoController } from './controller/todo.controller';
import { Todo } from './todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Todo])],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
