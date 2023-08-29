import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(): Promise<Todo[]>;
    findOne(id: any): Promise<Todo>;
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    update(id: any, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    remove(id: any): Promise<void>;
}
