import React, { Component } from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { observable } from 'mobx';


import styles from './main.css';


const data = observable({
  test: 1,
});

const Asd = observer(
  class TodoView extends Component {

    handler() {
      data.test += 1;
    }

    render() {
      return <div>
        { data.test }
        <button onClick={ this.handler }>+</button>
      </div>;
    }
  }
);

class App extends Component {
  render() {
    return <div className={ styles.container }>
      Hello
      <Asd />
    </div>;
  }
}

render(
  <App />,
  document.getElementById('app'),
);
