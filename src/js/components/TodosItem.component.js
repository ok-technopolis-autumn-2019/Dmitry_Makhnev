import React, { Component } from 'react';
import { changeTodoItemDoneStatusAction } from '../actions/changeTodoItemDoneStatus.action';
import { removeTodoItemAction } from '../actions/removeTodoItem.action';


export class TodosItemComponent extends Component {

  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
    this.onDoneChanged = this.onDoneChanged.bind(this);
  }

  onDoneChanged(e) {
    const checkbox = e.target;
    const isDone = checkbox.checked;
    changeTodoItemDoneStatusAction(
      this.props.itemData.id,
      isDone,
    );
  }

  onDelete() {
    removeTodoItemAction(this.props.itemData.id);
  }

  render() {
    const itemData = this.props.itemData;

    return <div className="todo-item">
      <input
        type="checkbox"
        className="todo-item_checked"
        defaultChecked={ itemData.isDone }
        onChange={ this.onDoneChanged }
        aria-label={ `Mark todo as ${itemData.isDone ? 'unready' : 'ready'}` }
      />
      <input
        className="todo-item_body"
        defaultValue={ itemData.text }
        />
      <button
        className="todo-item_delete"
        aria-label="Delete todo"
        onClick={ this.onDelete }
      >×</button>
    </div>
  }

}
