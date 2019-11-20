import { renderStringToHTML } from '../helpers/renderStringToHTML';
import { removeTodoItemAction } from '../actions/removeTodoItem.action';
import { changeTodoItemDoneStatusAction } from '../actions/changeTodoItemDoneStatus.action';


export class TodosItem {

  constructor(itemData) {
    this._itemData = itemData;
    this.root = this._renderDom(itemData);
    this.root.querySelector('.todo-item_checked')
      .addEventListener('change', this._mangeReadyArea.bind(this));
    this.root.querySelector('.todo-item_delete')
      .addEventListener('click', this._deleteItem.bind(this));
  }

  _mangeReadyArea(e) {
    const checkbox = e.target;
    const isDone = checkbox.checked;
    changeTodoItemDoneStatusAction(this._itemData.id, isDone);
  }

  _deleteItem() {
    removeTodoItemAction(this._itemData.id);
  }

  _renderDom(itemData) {
    const resultHTML = `<div class="todo-item">
      <input
        type="checkbox"
        class="todo-item_checked"
        ${itemData.isDone ? 'checked=""' : ''}
        aria-label="Mark todo as ${itemData.isDone ? 'unready' : 'ready'}" />
      <div
        class="todo-item_body"
        contenteditable="true"
      >
        ${itemData.text}
      </div>
      <button
        class="todo-item_delete"
        aria-label="Delete todo"
      >
        ×
      </button>
    </div>`;

    return renderStringToHTML(resultHTML);

  }


}
