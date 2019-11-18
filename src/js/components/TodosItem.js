import { renderStringToHTML } from '../helpers/renderStringToHTML';
import { EventEmitter } from '../../../stash/js/ee';


export class TodosItem {

  constructor(itemData) {
    this.root = this._renderDom(itemData);
    this.root.querySelector('.todo-item_checked')
      .addEventListener('change', this._mangeReadyArea.bind(this));
    this.root.querySelector('.todo-item_delete')
      .addEventListener('click', this._deleteItem.bind(this));
    this.onDelete = new EventEmitter();
    this.isShowed = true;
  }

  _mangeReadyArea(e) {
    const checkbox = e.target;
    checkbox.setAttribute(
      'aria-label',
      checkbox.checked
        ? 'Mark todo as unready'
        : 'Mark todo as ready',
    );
  }

  _deleteItem() {
    this.onDelete.emit(this);
  }

  show() {
    this.isShowed = true;
    this.root.style.display = 'flex';
  }

  hide() {
    this.isShowed = false;
    this.root.style.display = 'none';
  }

  getReadyStatus() {
    return this.root.querySelector('.todo-item_checked').checked;
  }

  _renderDom(itemData) {
    const resultHTML = `<div class="todo-item">
      <input
        type="checkbox"
        class="todo-item_checked"
        aria-label="Mark todo as ready" />
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
