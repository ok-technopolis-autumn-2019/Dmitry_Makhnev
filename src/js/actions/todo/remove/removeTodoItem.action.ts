import { todosModel } from '../../../models/todosModel';
import httpService from '../../../services/httpService';

export function removeTodoItemAction(todoItemId: number) {
  todosModel.items = todosModel.items.filter(item => item.id !== todoItemId);

  httpService
    .request(
      'DELETE',
      `http://localhost:3000/todos/${todoItemId}`,
    );
}

