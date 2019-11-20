import { addTodoAction } from '../actions/addTodo.action';


export class TodosAdd {

  constructor() {
    const form = document.querySelector('#todos-add-form');
    form.addEventListener('submit', this._onSubmit.bind(this));
  }

  _onSubmit(event) {
    event.preventDefault();
    const inputForAdding = document.getElementById('new-todo-input');
    const newTodoBodyValue = inputForAdding.value;
    inputForAdding.value = '';
    if (newTodoBodyValue !== '') {
      addTodoAction({
        text: newTodoBodyValue,
      });
    }
  }

}

