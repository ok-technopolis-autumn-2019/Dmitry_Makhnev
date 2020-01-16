import { TodoItemModel, todosModel } from '../../../models/todosModel';
import httpService from '../../../services/httpService';


export interface TodoItemAddingData {
  text: string;
}

let clientIdCounter = 1;
export const TODO_ITEM_DEFAULT_CREATION_ID = -1;

export function addTodoAction(todoData: TodoItemAddingData) {

  const currentTodoClientId = clientIdCounter++;
  const newTodo: TodoItemModel = {
    clientId: currentTodoClientId,
    id: TODO_ITEM_DEFAULT_CREATION_ID,
    isDone: false,
    text: todoData.text,
  };
  todosModel.items.push(newTodo);

  return httpService.request<TodoItemModel>(
    'POST',
    'http://localhost:3000/todos',
    {
      text: newTodo.text,
      isDone: newTodo.isDone,
    }
  ).then(
    newItem => {
      const currentTodoIndex = todosModel.items
        .findIndex(
          item => item.clientId === currentTodoClientId
        );
      newItem.clientId = currentTodoClientId;
      todosModel.items[currentTodoIndex] = newItem;
      return newItem;
    }
  );
}
