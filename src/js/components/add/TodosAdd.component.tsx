import React, { Component } from 'react';
import { TodoItemAddingData } from '../../actions/todo/add/addTodo.action';

import style from './TodosAddComponent.module.css'

interface TodosAddComponentState {
  todoText?: string;
}


export class TodosAddComponent extends Component<
  {
    addButtonText: string;
    onNewTodo: (data: TodoItemAddingData) => void;
  },
  TodosAddComponentState
> {

  state: TodosAddComponentState  = {
    todoText: '',
  };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentTodoText = this.state.todoText;

    this.setState({
      todoText: '',
    });

    this.props.onNewTodo({
      text: currentTodoText,
    });

  };

  onInput = (e: React.FormEvent) => {
    const inputValue = (e.target as HTMLInputElement).value;

    this.setState({
      todoText: inputValue,
    });
  };

  render() {

    return <section className={style.content__controls}>
      <form
        className={ style.content__form }
        method="post"
        action="/"
        id="todos-add-form"
        autoComplete="off"
        onSubmit={ this.onSubmit }
      >

        <button
            className={ style.controls__select_all_button }
            // type="submit"
            aria-label="Add new todo"
        />

        <input
          type="text"
          className={style.controls__create_text_field}
          placeholder="What needs to be done?"
          value={ this.state.todoText }
          onChange={ this.onInput }
        />



      </form>
    </section>
  }

}
