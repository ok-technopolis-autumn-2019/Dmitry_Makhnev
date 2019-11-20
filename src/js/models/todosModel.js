import { observable } from 'mobx';
import { TodoItemsFilter } from './TodoItemsFilter';


export const todosModel = observable({
  filter: TodoItemsFilter.ALL,

  items: [],

  get filteredItems() {
    return this.items
      .filter(item => {
        switch (this.filter) {
          case TodoItemsFilter.ALL:
            return true;
          case TodoItemsFilter.READY:
            return item.isDone;
          case TodoItemsFilter.NOT_READY:
            return !item.isDone;
        }
      });
  }
});

