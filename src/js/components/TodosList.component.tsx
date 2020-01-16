import React, { Component } from 'react';
import { TodosItemComponent } from './TodosItem.component';
import { TodoItemModel } from '../models/todosModel';


interface TodosListComponentProps {
  items: Array<TodoItemModel>,
}


export class TodosListComponent extends Component<TodosListComponentProps> {

  render() {
    return <div className="todos-list">
      { this.props.items.map(itemData =>
        <TodosItemComponent
          key={ itemData.clientId ? `c_${itemData.clientId}` : itemData.id }
          itemData={ itemData }
        />
      ) }
    </div>;
  }

}
