import React, { Component } from 'react';
import { changeTodoItemDoneStatusAction } from '../actions/changeTodoItemDoneStatus.action';
import { removeTodoItemAction } from '../actions/todo/remove/removeTodoItem.action';
import { TodoItemModel } from '../models/todosModel';
import {changeTodoItemTextStatusAction} from "../actions/changeTodosItemTextStatus.action";


export class TodosItemComponent extends Component<{
  itemData: TodoItemModel,
}> {

  onDoneChanged = (e: React.FormEvent) => {
    const checkbox = e.target as HTMLInputElement;
    const isDone = checkbox.checked;
    changeTodoItemDoneStatusAction(
      this.props.itemData.id,
      isDone,
    );
  };

  onTextChanged = (e: React.FormEvent) => {
    const input = e.target as HTMLInputElement;
    const text = input.value;
    changeTodoItemTextStatusAction(
        this.props.itemData.id,
        text,
    );
  };

  onDelete = () => {
    removeTodoItemAction(this.props.itemData.id);
  };

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
        onChange={ this.onTextChanged }
        />
      <button
        className="todo-item_delete"
        aria-label="Delete todo"
        onClick={ this.onDelete }
      >×</button>
    </div>
  }

}
