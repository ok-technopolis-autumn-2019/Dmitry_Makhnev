
export function initTodosActions() {


  document.getElementById('todos-filter-all')
    .addEventListener('click', function () {
      document.querySelectorAll('.todo-item')
        .forEach(function(item) {
          item.style.display = 'block';
        });
    });

  function manageTodoItemVisible(ifIsChecked) {
    document.querySelectorAll('.todo-item')
      .forEach(function(item) {
        const isChecked = item.querySelector('.todo-item_checked').checked;
        item.style.display = isChecked === ifIsChecked
          ? 'none'
          : 'block';
      });
  }

  document.getElementById('todos-filter-not-ready')
    .addEventListener('click', function () {
      manageTodoItemVisible(true);
    });

  document.getElementById('todos-filter-ready')
    .addEventListener('click', function () {
      manageTodoItemVisible(false);
    });

  document.getElementById('todos-clean-all')
    .addEventListener('click', function () {
      document.getElementById('todos-list').innerHTML = '';
    });

}
