import { action, observable } from 'mobx';

class Store {
  constructor() {}
}

export function initStore() {
  return (store = new Store());
}
