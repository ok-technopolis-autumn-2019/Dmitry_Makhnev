import React, { Component } from 'react';
import { TodosAddComponent } from '../add/TodosAdd.component';
import { addTodoAction, TodoItemAddingData } from '../../actions/todo/add/addTodo.action';
import { TodosListComponent } from '../list/TodosList.component';
import { observer } from 'mobx-react';
import { todosModel } from '../../models/todosModel';
import { TodosActionsComponent } from '../actions/TodosActions.component';
import { getTodosAction } from '../../actions/todo/get/getTodos.action';

import style from './TodosComponent.module.css'


@observer
export class TodosComponent extends Component {

  onAdd = (value: TodoItemAddingData) => {
    addTodoAction(value);
  };

  componentDidMount(): void {
    getTodosAction();
  }

  render() {
    return <main className={ style.todo_app__content }>
      {
        todosModel.error != null
          ? <div style={ {color: '#f00'} }>{ todosModel.error }</div>
          : <></>
      }
      {
        todosModel.isLoading
          ? <div>isLoading...</div>
          : <></>
      }
      {
        !todosModel.isLoading && todosModel.error == null
          ? <>
            <TodosAddComponent
              onNewTodo={ this.onAdd }
              addButtonText={ 'Add' }
            />
            <TodosListComponent items={ todosModel.filteredItems } />
            <TodosActionsComponent items={ todosModel.items } filteredItems={ todosModel.filteredItems } />
          </>
          : <></>
      }

    </main>
  }

}
