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
    const { children, style } = this.props;

    const child = React.Children.only(children);
    const ChildComponent = React.cloneElement(child, { show, style });

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
  style: React.PropTypes.object,  // eslint-disable-line react/forbid-prop-types
};

Component.defaultProps = {
  style: {
    background: 'tomato',
    fontSize: '24px',
    lineHeight: '36px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    letterSpacing: '1.2em',
    paddingLeft: '1.2em', // to compensate for letter spacing
  },
};

export default Component;
