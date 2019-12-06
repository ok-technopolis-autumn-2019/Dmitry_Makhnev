import { todosModel } from '../models/todosModel';

let idsCounter = 0;

export interface TodoItemAddingData {
  text: string;
}

export function addTodoAction(todoData: TodoItemAddingData) {
  todosModel.items.push({
    id: idsCounter++,
    text: todoData.text,
    isDone: false,
  });
}
