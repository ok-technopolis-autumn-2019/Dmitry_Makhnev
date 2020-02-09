import React, { Component } from 'react';
import { TodosItemComponent } from '../TodosItem/TodosItem.component';
import { TodoItemModel } from '../../models/todosModel';
import * as style from './TodosList.css';

interface TodosListComponentProps {
  items: Array<TodoItemModel>,
}


export class TodosListComponent extends Component<TodosListComponentProps> {

  render() {
    return <div className={style.todosList}>
      { this.props.items.map(itemData =>
        <TodosItemComponent
          key={ itemData.clientId ? `c_${itemData.clientId}` : itemData.id }
          itemData={ itemData }
        />
      ) }
    </div>;
  }

}
