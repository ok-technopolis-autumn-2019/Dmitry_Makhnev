import { EventEmitter } from '../../../stash/js/ee';


export class TodosActions {

  constructor() {
    this.onFilterNotReady = new EventEmitter();
    this.onFilterReady = new EventEmitter();
    this.onCleanAll = new EventEmitter();
    this.onFilterAll = new EventEmitter();
    this._bindEvents();
  }

  _bindEvents() {
    document.getElementById('todos-filter-all')
      .addEventListener('click', this._onFilterAll.bind(this));

    document.getElementById('todos-filter-not-ready')
      .addEventListener('click', this._onFilterNotReady.bind(this));

    document.getElementById('todos-filter-ready')
      .addEventListener('click', this._onFilterReady.bind(this));

    document.getElementById('todos-clean-all')
      .addEventListener('click',this._onCleanAll.bind(this));
  }

  _onFilterAll() {
    this.onFilterAll.emit();
  }

  _onFilterNotReady() {
    this.onFilterNotReady.emit();
  }

  _onFilterReady() {
    this.onFilterReady.emit();
  }

  _onCleanAll() {
    this.onCleanAll.emit();
  }

  setCounter(counterData) {
    const counter = document.getElementById('todos-counter');
    const newCounterString = `${counterData.showed}/${counterData.all}`;
    counter.innerText = newCounterString;
  }



}
