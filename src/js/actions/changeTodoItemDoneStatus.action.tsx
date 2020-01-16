import { todosModel } from '../models/todosModel';
import httpService from '../services/httpService';

export function changeTodoItemDoneStatusAction(
  todoItemId: number,
  isDone: boolean,
) {
  const item = todosModel.items.find(item => item.id === todoItemId);
  item.isDone = isDone;

  httpService.request(
    'PUT',
    `http://localhost:3000/todos/${todoItemId}`,
    {
      isDone: isDone,
    },
  );
}
