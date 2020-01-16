import { addTodoAction } from './todo/add/addTodo.action';
import { cleanAllTodosAction } from './cleanAllTodos.action';
import { todosModel } from '../models/todosModel';


describe(`cleanAllTodosAction`, () => {

  describe(`base usage`, () => {
    addTodoAction({ text: 'asd' });
    cleanAllTodosAction();

    const itemsCount = todosModel.items.length;

    it(`all items were deleted`, () => {
      expect(itemsCount).toBe(0);
    });

  });


});
