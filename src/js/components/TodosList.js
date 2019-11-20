import { TodosItem } from './TodosItem';
import { autorun } from 'mobx';


export class TodosList {

  constructor(todosModel) {
    this._list = document.getElementById('todos-list');

    autorun(() => {
      const df = document.createDocumentFragment();
      todosModel.filteredItems.forEach(item => {
        const newItem = new TodosItem(item);
        df.appendChild(newItem.root);
      });
      this._list.innerHTML = '';
      this._list.appendChild(df);
    });
  }

}
