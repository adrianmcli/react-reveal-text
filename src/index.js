import React from 'react';

class Component extends React.Component {

  renderSpans(text) {
    const textArray = text.split('');
    return textArray.map((letter, index) => {
      const transitionTime = 2000;
      const delay = parseInt(Math.random() * transitionTime, 10);
      const styles = {
        color: 'red',
        opacity: this.props.show ? '1' : '0',
        transition: `opacity ${transitionTime}ms`,
        transitionDelay: `${delay}ms`,
      };
      return <span style={styles}>{letter}</span>;
    });
  }

  render() {
    const text = 'REACT NEXT';
    return (
      <div>
        {this.renderSpans(text)}
      </div>
    );
  }
}

export default Component;
