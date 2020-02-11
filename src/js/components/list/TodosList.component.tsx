import React, { Component } from 'react';
import { TodosItemComponent } from '../item/TodosItem.component';
import { TodoItemModel } from '../../models/todosModel';

import style from './TodosListComponent.module.css'


interface TodosListComponentProps {
  items: Array<TodoItemModel>,
}


export class TodosListComponent extends Component<TodosListComponentProps> {

  render() {
    return <section>
      <ul className={ style.todos_list }>
        { this.props.items.map(itemData =>
          <TodosItemComponent
            key={ itemData.clientId ? `c_${itemData.clientId}` : itemData.id }
            itemData={ itemData }
          />
        ) }
      </ul>
    </section>
  }

}
