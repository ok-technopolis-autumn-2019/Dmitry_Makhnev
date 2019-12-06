import { addTodoAction } from './addTodo.action';
import { todosModel } from '../models/todosModel';


describe(`addTodoAction()`, () => {

  describe(`adding`, () => {

    const TEXT = 'asd';

    addTodoAction({ text: TEXT });
    const itemsCount = todosModel.items.length;
    const firstTodoItem = todosModel.items[0];

    it(`we have first item`, () => {
      expect(firstTodoItem).toBeDefined();
    });

    it(`text is correct`, () => {
      expect(firstTodoItem.text).toBe(TEXT);
    });

    it(`todo isn't done `, () => {
      expect(firstTodoItem.isDone).toBeFalsy();
    });

    it(`todo has id`, () => {
      expect(typeof firstTodoItem.id).toBe('number');
    });

    it(`we have only one item`, () => {
      expect(itemsCount).toBe(1);
    });

    addTodoAction({ text: TEXT });
    const secondItem = todosModel.items[1];
    it(`send item id isn't same as first item`, () => {
      expect(secondItem.id).not.toBe(firstTodoItem.id);
    });

  });







});


