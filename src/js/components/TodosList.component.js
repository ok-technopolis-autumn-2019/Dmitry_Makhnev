import React, { Component } from 'react';
import { TodosItemComponent } from './TodosItem.component';


export class TodosListComponent extends Component {

  render() {
    console.log(this.props.items);

    return <div className="todos-list">
      { this.props.items.map(itemData =>
        <TodosItemComponent key={ itemData.id } itemData={ itemData } />
      ) }
    </div>;
  }

}
