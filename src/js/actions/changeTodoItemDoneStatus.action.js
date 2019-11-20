import { todosModel } from '../models/todosModel';

export function changeTodoItemDoneStatusAction(id, isDone) {
  const item = todosModel.items.find(item => item.id === id);
  item.isDone = isDone;
}
