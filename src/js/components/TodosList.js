import { TodosItem } from './TodosItem';
import { EventEmitter } from '../../../stash/js/ee';


export class TodosList {

  constructor() {
    this._list = document.getElementById('todos-list');
    this._items = [];
    this._filterState = 'all';
    this.onItmesVisibilityChange = new EventEmitter();
  }

  _onItemRemove(item) {
    item.root.remove();
    this._items = this._items.filter(function (oneOfItems) {
      return oneOfItems !== item;
    });
  }

  addItem(itemData) {

    const newItem = new TodosItem(itemData);
    this._items.push(newItem);

    newItem.onDelete.on(this._onItemRemove, this);

    this._list.appendChild(newItem.root);

    this._applyFilterForItem(newItem, this._filterState);

    this._checkVisibleElements();
  }

  _checkVisibleElements() {
    let showedCount = 0;
    this._items.forEach(item => {
      if (item.isShowed) {
        showedCount += 1;
      }
    });
    this.onItmesVisibilityChange.emit({
      showed: showedCount,
      all: this._items.length,
    });
  }

  cleanAll() {
    this._items.forEach(function(item) {
      item.root.remove();
    });
    this._items = [];
  }

  _applyFilterForItem(item, filterType) {
    switch (filterType) {
      case 'ready':
        item.getReadyStatus()
          ? item.show()
          : item.hide();
        break;
      case 'notReady':
        item.getReadyStatus()
          ? item.hide()
          : item.show();
        break;
      case 'all':
        item.show();
        break;
    }
  }

  filter(filterType) {
    this._filterState = filterType;
    this._items.forEach(item => {
      this._applyFilterForItem(item, filterType);
    });
    this._checkVisibleElements();
  }

}
