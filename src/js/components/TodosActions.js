import { setTodosFilterAction } from '../actions/setTodosFilter.action';
import { cleanAllTodosAction } from '../actions/cleanAllTodos.action';
import { autorun } from 'mobx';


export class TodosActions {

  constructor(todosModel) {
    this._bindEvents();

    autorun(() => {
      const counter = document.getElementById('todos-counter');
      const itemsCount = todosModel.items.length;
      const filteredItemsCount = todosModel.filteredItems.length;
      const newCounterString = `${filteredItemsCount}/${itemsCount}`;
      counter.innerText = newCounterString;
    });
  }

  _bindEvents() {
    document.getElementById('todos-filter-all')
      .addEventListener('click', this._onFilter.bind(this));

    document.getElementById('todos-filter-not-ready')
      .addEventListener('click', this._onFilter.bind(this));

    document.getElementById('todos-filter-ready')
      .addEventListener('click', this._onFilter.bind(this));

    document.getElementById('todos-clean-all')
      .addEventListener('click',this._onCleanAll.bind(this));
  }

  _onFilter(e) {
    const button = e.target;
    const filterValue = button.getAttribute('data-filter');
    setTodosFilterAction(filterValue);
  }

  _onCleanAll() {
    cleanAllTodosAction();
  }



}
