

export function initTodosAdd() {
  const form = document.querySelector('#todos-add-form');

  let counter = 0;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputForAdding = document.getElementById('new-todo-input');
    const newTodoBodyValue = inputForAdding.value;
    inputForAdding.value = '';

    const list = document.getElementById('todos-list');

    counter += 1;

    list.insertAdjacentHTML('beforeend', `<div class="todo-item">
      <input
        type="checkbox"
        class="todo-item_checked"
        id="todo-checkbox_${counter}"
        aria-label="Mark todo as ready" />
      <div
        class="todo-item_body"
        contenteditable="true"
      >
        ${newTodoBodyValue}
      </div>
      <button
        class="todo-item_delete"
        aria-label="Delete todo"
        id="todo-delete_${counter}"
      >
        ×
      </button>
    </div>`,);

    document.querySelector(`#todo-checkbox_${counter}`)
      .addEventListener('change', function () {
        this.setAttribute(
          'aria-label',
          this.checked
            ? 'Mark todo as unready'
            : 'Mark todo as ready'
        );
      });

    document.querySelector(`#todo-delete_${counter}`)
      .addEventListener('click', function () {
        this.closest('.todo-item')
          .remove();
      });


  });
}

