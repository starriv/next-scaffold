import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';

import { Button } from 'antd';

@inject('store')
@observer
class Index extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello,World </h1>
        <h1>
          {this.props.store.lastUpdate}
        </h1>
        <Button
          type="primary"
          icon="poweroff"
          loading={this.props.store.iconLoading}
          onClick={this.props.store.enterIconLoading}
        >
          Click me!
        </Button>
      </div>
    );
  }
}

export default Index;
