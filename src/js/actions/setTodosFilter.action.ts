import { todosModel } from '../models/todosModel';
import { TodoItemsFilter } from '../models/TodoItemsFilter';


export function setTodosFilterAction(filterValue: TodoItemsFilter) {
  todosModel.filter = filterValue;
}
