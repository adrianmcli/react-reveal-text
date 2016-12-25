import React from 'react';

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      show: false,
    };
  }

  onClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { show } = this.state;
    const { children } = this.props;

    const child = React.Children.only(children);
    const ChildComponent = React.cloneElement(child, { show });

    return (
      <div>
        { ChildComponent }
        <button onClick={this.onClick}>Toggle Show</button>
      </div>
    );
  }
}

Component.propTypes = {
  children: React.PropTypes.element,
};

export default Component;
