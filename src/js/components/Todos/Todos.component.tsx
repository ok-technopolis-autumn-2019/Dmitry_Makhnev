import React, { Component } from 'react';
import { TodosAddComponent } from '../TodosAdd.component';
import { addTodoAction, TodoItemAddingData } from '../../actions/todo/add/addTodo.action';
import { TodosListComponent } from '../TodosList/TodosList.component';
import { observer } from 'mobx-react';
import { todosModel } from '../../models/todosModel';
import { TodosActionsComponent } from '../TodosActions.component';
import { getTodosAction } from '../../actions/todo/get/getTodos.action';
import * as style from './Todos.css';

@observer
export class TodosComponent extends Component {

  onAdd = (value: TodoItemAddingData) => {
    addTodoAction(value);
  };

  componentDidMount(): void {
    getTodosAction();
  }

  render() {
    return <div className={style.todos}>
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

    </div>
  }

}
