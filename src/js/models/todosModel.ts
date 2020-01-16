import { computed, observable } from 'mobx';
import { TodoItemsFilter } from './TodoItemsFilter';


export interface TodoItemModel {
  clientId?: number;
  id: number;
  text: string;
  isDone: boolean;
}

export class TodosModel {

  @observable
  filter: TodoItemsFilter = TodoItemsFilter.ALL;

  @observable
  isLoading: boolean = false;

  @observable
  error: string = null;

  @observable
  items: TodoItemModel[] = [];

  @computed
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
}


export const todosModel = new TodosModel();

