import { action, observable } from 'mobx';

let store = null;

class Store {
  @observable iconLoading;
  @observable lastUpdate;

  constructor(iconLoading, lastUpdate) {
    this.iconLoading = iconLoading;
    this.lastUpdate = lastUpdate;
  }

  @action
  enterIconLoading = () => {
    this.iconLoading = !this.iconLoading;
    setTimeout(() => {
      this.iconLoading = false;
    }, 2000);
  };
}

export function initStore(iconLoading = false, lastUpdate = Date.now()) {
  return (store = new Store(iconLoading, lastUpdate));
}
