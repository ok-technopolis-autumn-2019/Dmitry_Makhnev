import { todosModel } from '../models/todosModel';
import httpService from "../services/httpService";

export function cleanAllTodosAction() {

  todosModel.items.forEach(value => {
        const id = value.id;
        httpService.request(
            'DELETE',
            `http://localhost:3000/todos/${id}`
        ).then(
            () => {
              todosModel.items = todosModel.items.filter(item => item.id !== id);
            }
        )
      }
  );

}
