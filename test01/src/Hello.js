import React from 'react';

class hello extends ReadableByteStreamController.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

// const root = document.getElementById('root');
// root.render(<Hello toWhat="World" />);
export default hello;