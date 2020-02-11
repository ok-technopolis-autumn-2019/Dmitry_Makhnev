import React, { Component } from 'react';
import { TodosComponent } from '../todos/Todos.component';

import style from './AppComponent.module.css'


export class App extends Component {

  render() {
    return (
        <div className={ style.todos }>
          <header>
            <h1 className={ style.header__h1 }>todos</h1>
          </header>
          <TodosComponent/>
        </div>
    );
  }

}
