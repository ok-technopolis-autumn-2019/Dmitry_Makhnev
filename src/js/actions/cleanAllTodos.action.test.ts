import { addTodoAction } from './todo/add/addTodo.action';
import { cleanCompletedTodos } from './cleanCompletedTodos';
import { todosModel } from '../models/todosModel';


describe(`cleanCompletedTodosAction`, () => {

  describe(`base usage`, () => {
    addTodoAction({ text: 'not done' });
    const doneItemPromise = addTodoAction({ text: 'is done' });
    doneItemPromise.then(value => { value.isDone = true })
    cleanCompletedTodos();

    const itemsCount = todosModel.items.length;

    it(`completed items were deleted`, () => {
      expect(itemsCount).toBe(1);
    });

  });


});
