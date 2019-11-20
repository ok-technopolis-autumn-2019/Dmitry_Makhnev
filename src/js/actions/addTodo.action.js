import { todosModel } from '../models/todosModel';

let idsCounter = 0;

export function addTodoAction(todoData) {
  todosModel.items.push({
    id: idsCounter++,
    text: todoData.text,
    isDone: false,
  });
}
