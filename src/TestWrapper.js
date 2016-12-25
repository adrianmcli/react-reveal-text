import React from 'react';

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    const { show } = this.state;
    const { children } = this.props;

    const onClick = () => this.setState({ show: !show });

    const child = React.Children.only(children);
    const ChildComponent = React.cloneElement(child, { show: this.state.show });
    return (
      <div>
        { ChildComponent }
        <button onClick={onClick}>Toggle Show</button>
      </div>
    );
  }
}

export default Component;
