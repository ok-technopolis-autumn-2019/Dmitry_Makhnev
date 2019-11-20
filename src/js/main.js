
import { TodosAdd } from './components/TodosAdd';
import { TodosList } from './components/TodosList';
import { TodosActions } from './components/TodosActions';
import { todosModel } from './models/todosModel';


window.addEventListener(
  'DOMContentLoaded',
  function () {

    new TodosAdd();
    new TodosList(todosModel);
    new TodosActions(todosModel);

  },
);

