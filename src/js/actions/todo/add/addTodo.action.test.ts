jest.mock('../../../services/httpService');

import { addTodoAction, TODO_ITEM_DEFAULT_CREATION_ID } from './addTodo.action';
import { todosModel } from '../../../models/todosModel';


describe(`addTodoAction()`, () => {

  describe(`adding`, () => {

    const TEXT = 'asd';

    const firstItemAddingPromise = addTodoAction({ text: TEXT });
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

    it(`todo has clientId`, () => {
      expect(typeof firstTodoItem.clientId).toBe('number');
    });

    it(`we have only one item`, () => {
      expect(itemsCount).toBe(1);
    });

    it(`after server response item id !== ${TODO_ITEM_DEFAULT_CREATION_ID}`, done => {
      firstItemAddingPromise.then(item => {
        expect(item.id).toBeDefined();
        expect(item.id).not.toBe(TODO_ITEM_DEFAULT_CREATION_ID);
        expect(item.isDone).toBeFalsy();
        expect(item.text).toBe(TEXT);
        done();
      });
    });


    const secondItemAddingPromise = addTodoAction({ text: TEXT });
    const secondItem = todosModel.items[1];
    it(`second item clientId isn't same as first item clientId`, () => {
      expect(secondItem.clientId).not.toBe(firstTodoItem.clientId);
    });

    it(``, () => {

    });


  });







});


