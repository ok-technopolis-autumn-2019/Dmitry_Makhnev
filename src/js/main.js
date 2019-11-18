
import { TodosAdd } from './components/TodosAdd';
import { TodosList } from './components/TodosList';
import { TodosActions } from './components/TodosActions';


window.addEventListener(
  'DOMContentLoaded',
  function () {

    const todosAdd = new TodosAdd();
    const todosList = new TodosList();
    const todosAction = new TodosActions();

    todosAdd.onTodoAdded.on(function(value) {
      todosList.addItem(value);
    });

    todosAction.onCleanAll.on(function () {
      todosList.cleanAll();
    });
    todosAction.onFilterReady.on(function () {
      todosList.filter('ready');
    });
    todosAction.onFilterNotReady.on(function () {
      todosList.filter('notReady');
    });
    todosAction.onFilterAll.on(function () {
      todosList.filter('all');
    });

    todosList.onItmesVisibilityChange.on(counterData => {
      todosAction.setCounter(counterData);
    });

  },
);

