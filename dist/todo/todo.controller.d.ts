import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service ';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<Todo[]>;
    findOne(id: string): Promise<Todo>;
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    remove(id: string): Promise<void>;
}
