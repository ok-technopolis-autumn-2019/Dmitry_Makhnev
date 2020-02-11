import React, { Component } from 'react';
import { TodoItemsFilter } from '../../models/TodoItemsFilter';
import { setTodosFilterAction } from '../../actions/setTodosFilter.action';
import { cleanCompletedTodos } from '../../actions/cleanCompletedTodos';
import { TodoItemModel } from '../../models/todosModel';

import style from './TodosActionsComponent.module.css'

const theBestTexts = {
  [TodoItemsFilter.ALL]: {
    aria: 'Show all',
    text: 'All'
  },
  [TodoItemsFilter.READY]: {
    aria: 'Show ready',
    text: 'Ready'
  },
  [TodoItemsFilter.NOT_READY]: {
    aria: 'Show not ready',
    text: 'Not Ready'
  },
};

export class TodosActionsComponent extends Component<{
  items: TodoItemModel[];
  filteredItems: TodoItemModel[];
}> {

  render() {
    const {
      items,
      filteredItems,
    } = this.props;

    return <section className={ style.content__actions_bar }>

      <div className={style.actions_bar__item__task_counter} id="todos-counter">
        {filteredItems.length}/{items.length} items left
      </div>

      <div
          className={ style.actions_bar__item__task_filter }
          role="group"
          aria-label="Filter tasks by status"
      >
        { Object.values(TodoItemsFilter).map(filterValue =>

          <div>
            <input
              id={ `radio${filterValue}` }
              className={ style.task_filter__item__input }
              type="radio"
              name="filter"
            />
            <label
              htmlFor={ `radio${filterValue}` }
              className={ style.task_filter__label }
              key={ filterValue }
              aria-label={`Todos filter: ${ theBestTexts[filterValue].aria }`}
              onClick={ () => { setTodosFilterAction(filterValue) } }
            >
              <span
                className={ style.task_filter__item__text }>
                { theBestTexts[filterValue].text }
              </span>
            </label>
          </div>

        ) }
      </div>

      <button
        className={ style.actions_bar__item__task_clear_completed }
        id="todos-clean-completed"
        aria-label="Clean completed todos"
        onClick={ cleanCompletedTodos }
      >
        Clear completed
      </button>
    </section>
  }

}

