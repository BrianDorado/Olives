import React from 'react';

export default function(ComposedComponent) {
  class Authentication extends React.Component {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  return Authentication;
}
