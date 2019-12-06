import React, { Component } from 'react';
import { render } from 'react-dom';

import {observable} from 'mobx';
import {observer} from 'mobx-react';


class Store {
  @observable
  checker = 0;
}

const storeInstance = new Store();


@observer
class App extends Component<{ store: Store }> {

  add = () => {
    storeInstance.checker += 1;
  };

  render() {

    return <div>
      { storeInstance.checker }
      <button onClick={ this.add }>+</button>
    </div>;
  }
}


export function run() {
  render(
    <App store={storeInstance} />,
    document.getElementById('app'),
  );
}
