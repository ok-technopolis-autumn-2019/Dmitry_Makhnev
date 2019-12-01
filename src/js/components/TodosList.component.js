import React, { Component } from 'react';
import { TodosItemComponent } from './TodosItem.component';


export class TodosListComponent extends Component {

  render() {
    return <div className="todos-list">
      { this.props.items.map(itemData =>
        <TodosItemComponent key={ itemData.id } itemData={ itemData } />
      ) }
    </div>;
  }

}
