import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../mobx/stores/index-store';
import Index from '../mobx/containers/index/index';

export default class Deploying extends Component {
  static getInitialProps() {
    const store = initStore();
    return { iconLoading: store.iconLoading, lastUpdate: store.lastUpdate };
  }
  constructor(props) {
    super(props);
    this.store = initStore(props.iconLoading, props.lastUpdate);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Index title="Index Page" linkTo="/" />
      </Provider>
    );
  }
}
