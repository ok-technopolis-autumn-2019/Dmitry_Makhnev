import React, { Component } from 'react';
import { changeTodoItemDoneStatusAction } from '../../actions/changeTodoItemDoneStatus.action';
import { changeTodoItemTextAction } from '../../actions/changeTodoItemText.action';
import { removeTodoItemAction } from '../../actions/todo/remove/removeTodoItem.action';
import { TodoItemModel } from '../../models/todosModel';

import style from "./TodosItemComponent.module.css"


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

  onDelete = () => {
    removeTodoItemAction(this.props.itemData.id);
  };

  onTextChanged = (e: React.FormEvent) => {
    const input = e.target as HTMLInputElement;
    const text = input.value;
    changeTodoItemTextAction(
        this.props.itemData.id,
        text,
    );
  };

  render() {
    const itemData = this.props.itemData;

    return <li className={ style.list__itemView }>
      <input
        type="checkbox"
        className={style.itemView__checkbox}
        defaultChecked={ itemData.isDone }
        onChange={ this.onDoneChanged }
        aria-label={ `Mark todo as ${itemData.isDone ? 'unready' : 'ready'}` }
      />
      <input
        className="todo-item_body"
        onChange={ this.onTextChanged }
        defaultValue={ itemData.text }
        />
      <button
        className="todo-item_delete"
        aria-label="Delete todo"
        onClick={ this.onDelete }
      >×</button>
    </li>
  }

}
