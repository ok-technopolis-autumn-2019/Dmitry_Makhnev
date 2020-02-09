import { todosModel } from '../models/todosModel';
import httpService from '../services/httpService';

export function changeTodoItemTextStatusAction(
    todoItemId: number,
    text: string,
) {
    const item = todosModel.items.find(item => item.id === todoItemId);

    item.text = text;

    httpService.request(
        'PUT',
        `http://localhost:3000/todos/${todoItemId}`,
        {
            text: text,
        },
    );
}