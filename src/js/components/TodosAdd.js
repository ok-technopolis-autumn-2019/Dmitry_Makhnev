import { EventEmitter } from '../../../stash/js/ee';


export class TodosAdd {

  constructor() {
    this.onTodoAdded = new EventEmitter();
    const form = document.querySelector('#todos-add-form');
    form.addEventListener('submit', this._onSubmit.bind(this));
  }

  // handleEvent(e) {
  //   this._onSubmit(e);
  // }

  _onSubmit(event) {
    event.preventDefault();
    const inputForAdding = document.getElementById('new-todo-input');
    const newTodoBodyValue = inputForAdding.value;
    inputForAdding.value = '';
    if (newTodoBodyValue !== '') {
      this.onTodoAdded.emit({
        text: newTodoBodyValue,
      });
    }
  }

}

