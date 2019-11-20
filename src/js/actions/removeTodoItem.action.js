import { todosModel } from '../models/todosModel';

export function removeTodoItemAction(todoItemId) {
  todosModel.items = todosModel.items.filter(item => item.id !== todoItemId);
}

