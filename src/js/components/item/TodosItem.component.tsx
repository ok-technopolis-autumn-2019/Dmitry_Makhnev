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

    return <li className={ style.list__item_view }>
      <input
        type="checkbox"
        id={ `checkbox${itemData.id}` }
        className={style.item_view__checkbox}
        defaultChecked={ itemData.isDone }
        onChange={ this.onDoneChanged }
        aria-label={ `Mark todo as ${itemData.isDone ? 'unready' : 'ready'}` }
      />

      <label
          htmlFor={ `checkbox${itemData.id}` }
          className={ style.item_view__checkbox_label }>
        <span className={ style.item_view__checkbox_label__icon }/>
      </label>

      <input
        className={style.item_view__text}
        onChange={ this.onTextChanged }
        defaultValue={ itemData.text }
        />
      <button
        className={ style.item_view__delete_button }
        aria-label="Delete todo"
        onClick={ this.onDelete }
      />
    </li>
  }

}
