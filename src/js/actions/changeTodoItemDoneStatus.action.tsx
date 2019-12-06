import { todosModel } from '../models/todosModel';

export function changeTodoItemDoneStatusAction(
  id: number,
  isDone: boolean,
) {
  const item = todosModel.items.find(item => item.id === id);
  item.isDone = isDone;
}
