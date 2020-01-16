import { TodoItemModel, todosModel } from '../../../models/todosModel';
import httpService from '../../../services/httpService';

export interface ListQuery<T> {
  count: number;
  elements: T[];
}

export function getTodosAction() {

  todosModel.isLoading = true;

  httpService
    .request<ListQuery<TodoItemModel>>(
      'GET',
      'http://localhost:3000/todos',
    )
    .then(
      list => {
        todosModel.items = list.elements;
      }
    )
    .catch(
      error => {
        todosModel.error = 'Всё пропало когда запрашивали данные';
      }
    )
    .then(
      () => {
        todosModel.isLoading = false;
      }
    );

}

