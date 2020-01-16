import React, { Component } from 'react';
import { TodoItemAddingData } from '../actions/todo/add/addTodo.action';


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

    return <div className="todos-add">
      <form
        method="post"
        action="/"
        id="todos-add-form"
        autoComplete="off"
        onSubmit={ this.onSubmit }
      >

        <input
          type="text"
          placeholder="Add new todo"
          value={ this.state.todoText }
          onChange={ this.onInput }
        />

        <button
          type="submit"
          aria-label="Add new todo"
        >
          { this.props.addButtonText }
        </button>

      </form>
    </div>
  }

}
