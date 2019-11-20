import { todosModel } from '../models/todosModel';

export function setTodosFilterAction(filterValue) {
  todosModel.filter = filterValue;
}
