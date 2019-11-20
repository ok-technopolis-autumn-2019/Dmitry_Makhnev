import { autorun, observable } from 'mobx';

const todos = observable({
  filter: 'all',
  items: [
    {
      id: 1,
      text: '1',
      isDone: false,
    },
    {
      id: 2,
      text: '2',
      isDone: false,
    }
  ],
});

const zoo = observable({
  text: 'hello!',
});

const obj = decorateObj({
  asd: 'asd'
});

function decorateObj(obj) {
  const newObject = {};
  Object.keys(obj).forEach(key => {
    Object.defineProperty(newObject, key, {
      get() {
        console.log('1');
      },
      set(v) {
        console.log(v);
      }
    })
  });
  return newObject;
}

obj.asd = 'qwe';

autorun(() => {
  // console.log(zoo.text);
  todos.items.forEach(item => {
    console.log(item.text);
    console.log(item.isDone);
    item.text = 'asd';
  });
});

todos.items[0].isDone = true;
// todos.items.push({
//   text: '3',
//   isDone: true,
// });


zoo.text = 'changed';

