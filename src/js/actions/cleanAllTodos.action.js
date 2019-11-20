import { todosModel } from '../models/todosModel';

export function cleanAllTodosAction() {
  todosModel.items = [];
}
