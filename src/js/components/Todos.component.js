import React, { Component } from 'react';
import { TodosAddComponent } from './TodosAdd.component';
import { addTodoAction } from '../actions/addTodo.action';
import { TodosListComponent } from './TodosList.component';
import { observer } from 'mobx-react';
import { todosModel } from '../models/todosModel';
import { TodosActionsComponent } from './TodosActions.component';


class TodosComponent_ extends Component {

  constructor(props) {
    super(props);

    this.onAdd = this.onAdd.bind(this);
  }


  onAdd(value) {
    addTodoAction(value);
  }

  render() {

    return <div className="todos">
      <TodosAddComponent
        onNewTodo={ this.onAdd }
        addButtonText={ 'Add' }
      />

      <TodosListComponent items={ todosModel.filteredItems } />
      <TodosActionsComponent items={ todosModel.items } filteredItems={ todosModel.filteredItems } />

    </div>
  }

}

export const TodosComponent = observer(TodosComponent_);
