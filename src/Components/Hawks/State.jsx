import { React, Component } from 'react';

export default function(ComposedComponent) {
  class State extends Component {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  return State;
}
