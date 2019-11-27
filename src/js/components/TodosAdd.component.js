import React, { Component } from 'react';


export class TodosAddComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();

    const currentTodoText = this.state.todoText;

    this.setState({
      todoText: '',
    });

    this.props.onNewTodo({
      text: currentTodoText,
    });

  }

  onInput(e) {
    const inputValue = e.target.value;

    this.setState({
      todoText: inputValue,
    });
  }

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
