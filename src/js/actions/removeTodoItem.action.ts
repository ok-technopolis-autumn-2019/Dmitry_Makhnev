import { todosModel } from '../models/todosModel';

export function removeTodoItemAction(todoItemId: number) {
  todosModel.items = todosModel.items.filter(item => item.id !== todoItemId);
}

